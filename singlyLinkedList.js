// Node class represents each element in the linked list
class Node {
    constructor(data) {
        this.data = data;    // Stores the actual value
        this.next = null;    // Points to the next node, null by default
    }
}

// LinkedList class manages the entire list structure
class LinkedList {
    constructor() {
        this.head = null;    // Initialize empty list with head pointing to null
    }

    // Method to insert a new node at the start of the list
    insertAtBeginning(data) {
        let newNode = new Node(data);      // Create new node with given data
        newNode.next = this.head;          // New node points to current head
        this.head = newNode;               // Head now points to new node
    }

    // Method to insert a new node at the end of the list
    insertAtEnd(data) {
        let newNode = new Node(data);      // Create new node with given data

        // If list is empty, make new node the head
        if(!this.head){
            this.head = newNode;
            return;
        }

        let current = this.head;           // Start from first node
        // Traverse until we reach the last node
        while (current.next) {
            current = current.next;
        }    
        current.next = newNode;            // Link new node at the end
    }

    // Method to delete the first node
    deleteFromBeginning() {
        if(!this.head) return;             // If list is empty, do nothing
        this.head = this.head.next;        // Move head to second node
    }

    // Method to delete the last node
    deleteFromEnd() {
        if(!this.head) return;             // If list is empty, do nothing

        // If only one node exists
        if(!this.head.next){
            this.head = null;              // Set head to null
            return;
        }
        else {
            let current = this.head;
            // Traverse until second-to-last node
            while(current.next.next){
                current = current.next;
            }
            current.next = null;           // Remove reference to last node
        }
    }

    // Method to display all elements in the list
    display() {
        let current = this.head;
        let result = [];
        
        // Traverse and collect all values
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        
        // Print elements in a chain format
        console.log("List elements:", result.join(" -> "));
    }
}

// Test the implementation
let list = new LinkedList();

list.insertAtBeginning(10);     // Add 10 at start
list.insertAtBeginning(20);     // Add 20 at start
list.insertAtEnd(30);           // Add 30 at end
console.log(list);              // Display entire list
list.deleteFromBeginning();     // Remove first element
list.deleteFromEnd();           // Remove last element
list.display();                 // Show final list
