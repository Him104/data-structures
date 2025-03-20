class Node {
    constructor(data){
        this.data = data;
        this.next = null;
        
    }
}

class singlyCircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

insertAtEnd (data) {
const newNode = new Node(data);
if(!this.head){ // if list is empty
this.head = this.tail = newNode; // Both head and tail point to the same node
this.tail.next = this.head; // complete the circle by pointing back to head

} else {
    this.tail.next = newNode; // tail points to new node
    this.tail = newNode; // update tail
    this.tail.next = this.head; // complete the circle by pointing back to node
}
this.length++;
}

insertAtBeginning(data){
    const newNode = new Node(data);
    if(!this.head){ // list is empty
        this.head = newNode; // new node points to current head
        this.tail= newNode; // new node points to the current tail
        this.tail.next = this.head; // complete the circle by pointing back to head

    }
    else 
    {
        newNode.next = this.head // new node points to current head
        this.head = newNode; // update head to new node
        this.tail.next = this.head; // complete the circle by pointing back to head

    }
    this.length++;
}

deletefromEnd(){
    if(!this.head) // list is empty, do nothing

    return;

    if(this.head === this.tail) // if only one node exists
    {
        this.head = this.tail = null; // both head and tail become null
    }
    else {

        let current = this.head; 
        // find the node before tail
        while (current.next !== this.tail) {
            current = current.next;

            
        }
        this.tail = current; // update tail to the previous node
        this.tail.next = this.head; // complete the circle by pointing back to head
    }

    this.length--;
}

deletefromBeginning(){
    if(!this.head) // list is empty, do nothing
    return;

    if(this.head === this.tail) // if only one node exists
    {this.head = this.tail = null;} // both head and tail become null

    else {
        this.head = this.head.next;     //  move head to the next node
        this.tail.next = this.head; //  complete the circle by pointing back to head
    }
}


display() {
if (!this.head) {
    console.log("Empty list");
    return;
}

let current = this.head;
let result = "";

do {
    result += current.data + " -> ";
    current = current.next;
} while (current !== this.head); // Stop when we reach the head again

console.log(result + "head");
}
}


const list = new singlyCircularLinkedList();
list.insertAtEnd(1);
list.insertAtEnd(2);
list.insertAtEnd(3);
list.insertAtBeginning(0);
list.deletefromEnd();
list.deletefromBeginning();
list.display();

