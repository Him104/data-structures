class Node {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class BST {
  constructor() {
      this.root = null;
  }

  insert(value) {
      const newNode = new Node(value);
      if (this.root === null) {
          this.root = newNode;
      } else {
          this.insertNode(this.root, newNode);
      }
  }

  insertNode(node, newNode) {
      if (newNode.value < node.value) {
          if (node.left === null) {
              node.left = newNode;
          } else {
              this.insertNode(node.left, newNode);
          }
      } else {
          if (node.right === null) {
              node.right = newNode;
          } else {
              this.insertNode(node.right, newNode);
          }
      }
  }

  search(node, value) {
      if (node === null) {
          return null;
      } else if (value < node.value) {
          return this.search(node.left, value);
      } else if (value > node.value) {
          return this.search(node.right, value);
      } else {
          return node;
      }
  }

  inorder(node) {
      if (node !== null) {
          this.inorder(node.left); // Traverse the left subtree
          console.log(node.value); // Visit the root node
          this.inorder(node.right); // Traverse the right subtree
      }
  }

  preorder(node) {
      if (node !== null) {
          console.log(node.value); // Visit the root node
          this.preorder(node.left); // Traverse the left subtree
          this.preorder(node.right); // Traverse the right subtree
      }
  }

  postorder(node) {
      if (node !== null) {
          this.postorder(node.left); // Traverse the left subtree
          this.postorder(node.right); // Traverse the right subtree
          console.log(node.value); // Visit the root node
      }
  }

  getRootNode() {
      return this.root;
  }
}

// Example usage:
const bst = new BST();

bst.insert(25);
bst.insert(10);
bst.insert(7);
bst.insert(22);
bst.insert(17);
bst.insert(13);
bst.insert(5);
bst.insert(9);
bst.insert(27);

const root = bst.getRootNode();

console.log("Pre-order traversal:");
bst.preorder(root);

console.log("Post-order traversal:");
bst.postorder(root);

console.log("In-order traversal:");
bst.inorder(root);

const searchValue = 22;
const foundNode = bst.search(root, searchValue);
console.log(`Search for value ${searchValue}:`, foundNode ? `Found node with value ${foundNode.value}` : "Not found");