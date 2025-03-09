class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtBeginning(data) {
    let newNode = new Node(data);      // Step 1: Create new node
    newNode.next = this.head;          // Step 2: Link to existing list

    this.head = newNode; // Step 3: Update head
  }


 insertAtEnd(data) {
    let newNode = new Node(data);
    if(!this.head){
      this.head = newNode;
      return;
    }
let current = this.head; // starts at the beginning
while (current.next) { // traverses until we find the last node
    current = current.next; // moves to next node in each iteration
    
}    
current.next = newNode // links new node at the end
} 

deleteFromBeginning() {
    if(!this.head) return;

    this.head = this.head.next;

}

deleteFromEnd() {
    if(!this.head) return; 
// Check if head node has no next node (meaning this is the only node in list)

    if(!this.head.next){
        this.head = null;
        return;
    }
    else {
        let current = this.head;
        while(current.next.next){
            current = current.next;
        }
        current.next = null;
    }
}


display() {
    let current = this.head;
    let result = [];
    
    while (current) {
        result.push(current.data);
        current = current.next;
    }
    
    console.log("List elements:", result.join(" -> "));
   

}


}

let list = new LinkedList();

list.insertAtBeginning(10);
list.insertAtBeginning(20);
list.insertAtEnd(30);
console.log(list);
list.deleteFromBeginning();
list.deleteFromEnd();



list.display()