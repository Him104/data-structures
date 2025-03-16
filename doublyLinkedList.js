class Node {
    constructor(data) {
this.data = data;     // The value stored in this node
this.next = null;     // Pointer to the next node
this.prev = null;     // Pointer to the previous node
        
    }
}

class doublyLinkedList {
    constructor() {
        this.head = null; // Pointer to the first node
        this.tail = null; // Pointer to the last node
        this.length = 0;    // Number of nodes in the list
    }

insertAtbeginning(data) {
    const newNode = new Node(data); // create new node
    if(!this.head){ // if head === null, place node to the head
        this.head = newNode
        this.tail = newNode;
    }
    else {
        newNode.next = this.head; // new Node points to current head
        this.head.prev = newNode; // previous head now points to the new  node

        this.head = newNode; // new node becomes the new head
    }

    this.length++
}

insertAtEnd(data){
    const newNode = new Node(data);  // create new node
    if (!this.head) {  // if head === null, place node to the head
        
        this.head = newNode
        this.tail = newNode;
    }
    else {
        this.tail.next = newNode;  // current tail points to the new node
    newNode.prev = this.tail // new node points to current tail
        this.tail = newNode // new node becomes the new tail
    }

    this.length++

}
    deleteAtbeginning () {

        if(!this.head) return; //if list is empty, do nothing

        if(this.head === this.tail){ // if only one node exists
            this.head  = null; // head becomes null
             this.tail = null//  tail becomes null
        }
        else {
            this.head = this.head.next // move head to next node
            this.head.prev = null; // remove the link to previous node
        }

        this.length--;

    }


    deleteAtEnd(){
        if (!this.head) return; // if list is empty, do nothing

        if(this.head === this.tail){ // if only one node exists

            this.head  = null; // head becomes null 
            this.tail = null // tail becomes null
        }
            else {

            this.tail = this.tail.prev; // move tail to previous node
            this.tail.next = null; // remove the link to next node

            }
this.length--;



        }
    


display() {
    let current = this.head;
    let result = [];
    while (current) { // traverse until we find null 
        result += current.data + " <-> "
        current = current.next;
        
    }

    console.log(result + "null")

}


}

let dll = new doublyLinkedList();
dll.insertAtbeginning(10);
dll.insertAtbeginning(20);
dll.insertAtEnd(30)
dll.display()
dll.deleteAtbeginning()
dll.deleteAtEnd()

dll.display()


