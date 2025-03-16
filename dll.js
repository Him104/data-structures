class Node {
    constructor(data) {

        this.data = data;       // Data stored in the node
        this.next = null;       // Points to the next node
        this.prev = null;       // Points to the last node

        
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null; // Points to the first node
        this.tail = null; // Points to the last node
        this.length = 0;  // Tracks the number of nodes in the list
        
    }


    insertAtbeginning(data) {

        const newNode = new Node(data);
        if (!this.head) {       // If list is empty

            this.head = this.tail = newNode; // Both head and tail point to the new node
            
        } else {
            newNode.next = this.head; // New node points to the current head
            this.head.prev = newNode; // Previous head now points to the new node
            this.head = newNode; // New node becomes the new head

        }

        this.length++;

    }

insertAtEnd(data){
    const newNode = new Node(data); // Create new node
    if(!this.head){ /// If list is empty
        this.head = this.tail = newNode; // Both head and tail point to the new node
        
        }
        else{
            this.tail.next = newNode; // Current tail points to the new node
            newNode.prev = this.tail; // New node points to the current tail
            this.tail = newNode; // New node becomes the new tail
        }

        this.length++;
    }

    deleteFromBeginning(){
        if(!this.head) return; // If list is empty, do nothing
        if(this.head === this.tail){ // If only one node exists
            this.head = this.tail = null; // Both head and tail become null
        }
        else{
            this.head = this.head.next; // Move head to the next node
            this.head.prev = null; // Remove the link to the previous node
        }
        this.length--;
    }

    deleteFromEnd(){
        if(!this.head) return; // If list is empty, do nothing
        if(this.head === this.tail){ // If only one node exists
            this.head = this.tail =null; // Both head and tail become null
        }
            else{
                this.tail = this.tail.prev; // Move tail to the previous node
                this.tail.next = null; // Remove the link to the next node
            }

            this.length--;
    }

    printList() {
        let current = this.head;
        let result = "";
    
        while (current) { //  Traverse the list
            result += current.data + " <-> "; // Add data to the result string
            current = current.next; // Move to the next node
        }
    
        console.log(result + "null");
    }
    

}

const dll = new DoublyLinkedList();

dll.insertAtbeginning(10);

dll.insertAtbeginning(20);
dll.insertAtbeginning(30);
dll.printList();

dll.insertAtEnd(40);
dll.printList();

dll.deleteFromBeginning();
dll.printList(); 

dll.deleteFromEnd();
dll.printList(); 
