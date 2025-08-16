// Red-Black Tree Implementation in JavaScript
class RBNode {
    constructor(data) {
        this.data = data;
        this.color = 'RED'; // New nodes are always red
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
    }

    // Left rotate
    rotateLeft(x) {
        const y = x.right;
        x.right = y.left;
        
        if (y.left) y.left.parent = x;
        y.parent = x.parent;
        
        if (!x.parent) this.root = y;
        else if (x === x.parent.left) x.parent.left = y;
        else x.parent.right = y;
        
        y.left = x;
        x.parent = y;
    }

    // Right rotate
    rotateRight(x) {
        const y = x.left;
        x.left = y.right;
        
        if (y.right) y.right.parent = x;
        y.parent = x.parent;
        
        if (!x.parent) this.root = y;
        else if (x === x.parent.right) x.parent.right = y;
        else x.parent.left = y;
        
        y.right = x;
        x.parent = y;
    }

    // Insert a new node
    insert(data) {
        const newNode = new RBNode(data);
        
        if (!this.root) {
            this.root = newNode;
            newNode.color = 'BLACK';
            return;
        }

        // Standard BST insertion
        let parent = null;
        let current = this.root;
        
        while (current) {
            parent = current;
            if (data < current.data) current = current.left;
            else if (data > current.data) current = current.right;
            else return; // Duplicate values not allowed
        }

        newNode.parent = parent;
        if (data < parent.data) parent.left = newNode;
        else parent.right = newNode;

        // Fix RB tree violations
        this.fixInsert(newNode);
    }

    // Fix violations after insertion
    fixInsert(node) {
        while (node.parent && node.parent.color === 'RED') {
            if (node.parent === node.parent.parent.left) {
                const uncle = node.parent.parent.right;
                
                // Case 1: Uncle is red
                if (uncle && uncle.color === 'RED') {
                    node.parent.color = 'BLACK';
                    uncle.color = 'BLACK';
                    node.parent.parent.color = 'RED';
                    node = node.parent.parent;
                } else {
                    // Case 2: Uncle is black, node is right child
                    if (node === node.parent.right) {
                        node = node.parent;
                        this.rotateLeft(node);
                    }
                    // Case 3: Uncle is black, node is left child
                    node.parent.color = 'BLACK';
                    node.parent.parent.color = 'RED';
                    this.rotateRight(node.parent.parent);
                }
            } else {
                const uncle = node.parent.parent.left;
                
                // Case 1: Uncle is red
                if (uncle && uncle.color === 'RED') {
                    node.parent.color = 'BLACK';
                    uncle.color = 'BLACK';
                    node.parent.parent.color = 'RED';
                    node = node.parent.parent;
                } else {
                    // Case 2: Uncle is black, node is left child
                    if (node === node.parent.left) {
                        node = node.parent;
                        this.rotateRight(node);
                    }
                    // Case 3: Uncle is black, node is right child
                    node.parent.color = 'BLACK';
                    node.parent.parent.color = 'RED';
                    this.rotateLeft(node.parent.parent);
                }
            }
        }
        this.root.color = 'BLACK';
    }

    // Search for a value
    search(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) return current;
            current = data < current.data ? current.left : current.right;
        }
        return null;
    }

    // Find minimum node in subtree
    findMin(node) {
        while (node.left) node = node.left;
        return node;
    }

    // Delete a node
    delete(data) {
        const node = this.search(data);
        if (!node) return false;

        let nodeToDelete = node;
        let originalColor = nodeToDelete.color;
        let replacement;

        if (!node.left) {
            replacement = node.right;
            this.transplant(node, node.right);
        } else if (!node.right) {
            replacement = node.left;
            this.transplant(node, node.left);
        } else {
            nodeToDelete = this.findMin(node.right);
            originalColor = nodeToDelete.color;
            replacement = nodeToDelete.right;
            
            if (nodeToDelete.parent === node) {
                if (replacement) replacement.parent = nodeToDelete;
            } else {
                this.transplant(nodeToDelete, nodeToDelete.right);
                nodeToDelete.right = node.right;
                nodeToDelete.right.parent = nodeToDelete;
            }
            
            this.transplant(node, nodeToDelete);
            nodeToDelete.left = node.left;
            nodeToDelete.left.parent = nodeToDelete;
            nodeToDelete.color = node.color;
        }

        if (originalColor === 'BLACK') {
            this.fixDelete(replacement);
        }
        return true;
    }

    // Replace one subtree with another
    transplant(u, v) {
        if (!u.parent) this.root = v;
        else if (u === u.parent.left) u.parent.left = v;
        else u.parent.right = v;
        
        if (v) v.parent = u.parent;
    }

    // Fix violations after deletion
    fixDelete(node) {
        while (node !== this.root && (!node || node.color === 'BLACK')) {
            if (node === (node.parent ? node.parent.left : null)) {
                let sibling = node.parent.right;
                
                if (sibling.color === 'RED') {
                    sibling.color = 'BLACK';
                    node.parent.color = 'RED';
                    this.rotateLeft(node.parent);
                    sibling = node.parent.right;
                }
                
                if ((!sibling.left || sibling.left.color === 'BLACK') &&
                    (!sibling.right || sibling.right.color === 'BLACK')) {
                    sibling.color = 'RED';
                    node = node.parent;
                } else {
                    if (!sibling.right || sibling.right.color === 'BLACK') {
                        if (sibling.left) sibling.left.color = 'BLACK';
                        sibling.color = 'RED';
                        this.rotateRight(sibling);
                        sibling = node.parent.right;
                    }
                    
                    sibling.color = node.parent.color;
                    node.parent.color = 'BLACK';
                    if (sibling.right) sibling.right.color = 'BLACK';
                    this.rotateLeft(node.parent);
                    node = this.root;
                }
            } else {
                let sibling = node.parent.left;
                
                if (sibling.color === 'RED') {
                    sibling.color = 'BLACK';
                    node.parent.color = 'RED';
                    this.rotateRight(node.parent);
                    sibling = node.parent.left;
                }
                
                if ((!sibling.right || sibling.right.color === 'BLACK') &&
                    (!sibling.left || sibling.left.color === 'BLACK')) {
                    sibling.color = 'RED';
                    node = node.parent;
                } else {
                    if (!sibling.left || sibling.left.color === 'BLACK') {
                        if (sibling.right) sibling.right.color = 'BLACK';
                        sibling.color = 'RED';
                        this.rotateLeft(sibling);
                        sibling = node.parent.left;
                    }
                    
                    sibling.color = node.parent.color;
                    node.parent.color = 'BLACK';
                    if (sibling.left) sibling.left.color = 'BLACK';
                    this.rotateRight(node.parent);
                    node = this.root;
                }
            }
        }
        if (node) node.color = 'BLACK';
    }

    // In-order traversal
    inorder(node = this.root, result = []) {
        if (node) {
            this.inorder(node.left, result);
            result.push(`${node.data}(${node.color})`);
            this.inorder(node.right, result);
        }
        return result;
    }

    // Display tree structure
    display() {
        if (!this.root) return 'Empty tree';
        return this.inorder().join(', ');
    }
}

// Example usage
const rbt = new RedBlackTree();

// Insert values
[10, 20, 30, 15, 25, 5, 1].forEach(val => rbt.insert(val));

console.log('Tree after insertions:', rbt.display());
console.log('Search for 15:', rbt.search(15) ? 'Found' : 'Not found');
console.log('Search for 100:', rbt.search(100) ? 'Found' : 'Not found');

// Delete a value
rbt.delete(20);
console.log('Tree after deleting 20:', rbt.display());

rbt.delete(10);
console.log('Tree after deleting 10:', rbt.display());