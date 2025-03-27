class Node {
    constructor(data){
    this.data = data;
this.next  = null;
this.prev = null;
    }
}

class doublycircularLinkedList {
    constructor() {

        this.head = null; // points to the first node
        this.tail = null; // // points to the last node
        this.length = 0; // Tracks the number of nodes
        
    }


    insertAtEnd(data){

        const newNode = new Node(data) // create a new Node.
        if (!this.head){ // if list is empty
            this.head = this.tail = newNode; // both head and tail point to the new Node.
        this.head.next =  this.head; //  Complete the circle (next points to itself)
        this.head.prev = this.head //  Complete the circle (prev points to itself)
    }
    else {
        newNode.prev = this.tail // new node prev points to the current tail
        newNode.next = this.head //  new node next points to the current head
    this.tail.next  = newNode // old tail next points to the new node
    this.head.prev = newNode // head prev points to the new node
    this.tail = newNode // update the tail pointer to new Node
    }

    this.length++;

}

insertAtBeginning(data){

    const newNode = new Node(data)
    if(!this.head){  // if list is empty

        this.head = this.tail = newNode; // both head and tail point to the new Node.
this.head.prev = newNode; // complete the circle
this.tail.next = newNode //complete the circle


    }else {
        newNode.next = this.head; // New node's next points to the current head
        newNode.prev = this.tail; // New node's prev points to the current tail
        this.head.prev = newNode; // Head's prev points to the new node
        this.tail.next = newNode; // Tail's next points to the new node
        this.head = newNode; // Update head pointer
    }

    this.length++;

}

deletefromEnd(){
    if (!this.head) // if list is empty
        return;

        if(this.head === this.tail) { // only one node exists
            this.head = this.tail = null;

        } else {
            this.tail = this.tail.prev //move tail pointer to prev node
        this.tail.next = this.head // complete the circle
        this.head.prev = this.tail // update head previous pointer
        
        }
        this.length--;
}


display(){

    if (!this.head) { // If list is empty
        console.log("Empty list");
        return;
    }

    let current = this.head; // start from head
    let result = '';

    do {
        result += current.data + " <-> " // add node data to result array
        current = current.next;
    }
    while (current !== this.head) {

        console.log(result + "head"); // display the list
        
    }

}


deletefromBeginning() {
    if(!this.head) // list is empty

    return;
    if(this.head === this.tail) { // only one node exists

        this.head = this.tail = null;

    }
    else {
        this.head = this.head.next; // move head pointer to next node
        this.head.prev = this.tail // complete the circle
        this.tail.next = this.head // update tail next pointer
    }

    this.length--;
}


}

const list = new doublycircularLinkedList()
list.insertAtEnd(1);s
list.insertAtEnd(2);
list.insertAtEnd(3);
list.insertAtBeginning(0)
list.insertAtBeginning(-1)


list.deletefromEnd()
list.deletefromBeginning()

list.display()

// console.log(list.insertAtEnd(1))