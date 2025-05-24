// Node class represents each node in the AVL tree
class Node {
    constructor(value) {
        this.value = value;      // The data stored in the node
        this.left = null;        // Pointer to left child
        this.right = null;       // Pointer to right child
        this.height = 1;         // Height of the node (leaf nodes have height 1)
    }
}

// AVL Tree class - a self-balancing binary search tree
class avl {
    constructor() {
        this.root = null;        // Root node of the tree
    }

    // Returns the height of a node (0 if node is null)
    height(node) {
        if (!node) {
            return 0;            // Null nodes have height 0
        }
        return node.height;
    }

    // Calculates balance factor: height(left) - height(right)
    // Balance factor should be -1, 0, or 1 for a balanced AVL tree
    balanceFactor(node) {
        if (!node) {
            return 0;            // Null nodes have balance factor 0
        }
        return this.height(node.left) - this.height(node.right);
    }

    // Public method to add a value to the tree
    add(value) {
        this.root = this.insert(this.root, value);
        console.log(this.root);
    }

    // Recursive method to insert a value and maintain AVL property
    insert(node, value) {
        // Step 1: Perform normal BST insertion
        if (!node) {
            return new Node(value);  // Create new node if position is empty
        }

        if (value < node.value) {
            node.left = this.insert(node.left, value);   // Insert in left subtree
        }
        else if (value > node.value) {
            node.right = this.insert(node.right, value); // Insert in right subtree
        }
        else {
            return node;             // Duplicate values not allowed
        }

        // Step 2: Update height of current node
        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

        // Step 3: Get balance factor to check if node became unbalanced
        const balance = this.balanceFactor(node);

        // Step 4: Perform rotations if node is unbalanced
        
        // Left Heavy cases (balance > 1)
        if (balance > 1) {
            // Left-Left case: single right rotation
            if (value < node.left.value) {
                return this.rotateRight(node);
            }
            // Left-Right case: left rotation on left child, then right rotation on node
            if (value > node.left.value) {
                node.left = this.rotateLeft(node.left);
                return this.rotateRight(node);
            }
        }

        // Right Heavy cases (balance < -1)
        if (balance < -1) {
            // Right-Right case: single left rotation
            if (value > node.right.value) {
                return this.rotateLeft(node);
            }
            // Right-Left case: right rotation on right child, then left rotation on node
            if (value < node.right.value) {
                node.right = this.rotateRight(node.right);
                return this.rotateLeft(node);
            }
        }

        // Return unchanged node if balanced
        return node;
    }

    // Left rotation: used when right subtree is heavier
    // Promotes right child to be the new root of this subtree
    rotateLeft(node) {
        const newRoot = node.right;      // Right child becomes new root
        const temp = newRoot.left;       // Store left subtree of new root
        
        // Perform rotation
        newRoot.left = node;             // Old root becomes left child of new root
        node.right = temp;               // Attach stored subtree to old root's right
        
        // Update heights (order matters: update lower nodes first)
        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
        newRoot.height = 1 + Math.max(this.height(newRoot.left), this.height(newRoot.right));
        
        return newRoot;                  // Return new root of this subtree
    }

    // Right rotation: used when left subtree is heavier
    // Promotes left child to be the new root of this subtree
    rotateRight(node) {
        const newRoot = node.left;       // Left child becomes new root
        const temp = newRoot.right;      // Store right subtree of new root
        
        // Perform rotation
        newRoot.right = node;            // Old root becomes right child of new root
        node.left = temp;                // Attach stored subtree to old root's left
        
        // Update heights (order matters: update lower nodes first)
        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
        newRoot.height = 1 + Math.max(this.height(newRoot.left), this.height(newRoot.right));
        
        return newRoot;                  // Return new root of this subtree
    }

    // Helper method to display the tree structure (in-order traversal)
    inOrder(node = this.root) {
        if (node) {
            this.inOrder(node.left);
            console.log(`Value: ${node.value}, Height: ${node.height}, Balance: ${this.balanceFactor(node)}`);
            this.inOrder(node.right);
        }
    }
}

// Example usage
const avlTree = new avl();
avlTree.add(10);
avlTree.add(20);
avlTree.add(30);  // This will trigger a rotation
avlTree.add(40);
avlTree.add(50);  // This will trigger another rotation
avlTree.add(25);

console.log("In-order traversal:");
avlTree.inOrder();
