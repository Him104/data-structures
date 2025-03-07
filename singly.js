class Node {
    constructor(data) {

        this.data = data;
        this.next = null;
        
    }
}

class LinkedList {
    constructor() {

        this.head = null;
        this.length = 0
        
    }


    insertAtBeginning (data) {
        let newNode = new Node(data) // Create a new node
        newNode.next = this.head;       // Point new node to the current head
        this.head = newNode; 
        this.length++;           // Update head to the new node
    }


        // Insert at the end
        insertAtEnd(data) {
            const newNode = new Node(data);
            if (!this.head) {          // If list is empty, new node becomes head
                this.head = newNode;
            } else {
                let current = this.head;
                while (current.next) { // Traverse to the last node
                    current = current.next;
                }
                current.next = newNode; // Attach new node at the end
            }
            this.length++;
        }
    
    

    deleteFromBeginning() {
        if(!this.head) return; // if list is empty , do nothing
        this.head = this.head.next; // Move head to the next node
        this.length--;
    }


    deleteFromEnd() {
        if (!this.head) return; // if list is empty , do nothing
        
        if(!this.head.next) { // if there is only one node, remove it

            this.head = null;
        } else {
            let current = this.head;
            while (current.next.next) { // Traverse to second last node
                current = current.next;
            }
            current.next = null;    // Remove last node
        }
        this.length--;
    }

    // Print the linked list
    printList() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + " -> ";
            current = current.next;
        }
        console.log(result + "null"); // End of list
    }
}

    


let list = new LinkedList()

list.insertAtBeginning(10)
list.insertAtBeginning(20)
list.insertAtEnd(30);
list.printList()
console.log("Length:", list.length); 

list.deleteFromBeginning()
list.printList()
console.log("Length:", list.length); 
list.deleteFromEnd()
list.printList()
console.log("Length : ",list.length)

console.log(list)
