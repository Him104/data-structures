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
        let newNode = new Node(data)
        newNode.next = this.head;
        this.head = newNode;
    }

}

    // insertAtEnd (data) {
    //     let newNode = new Node(data); // create a new Node
    //     newNode.next = this.head // Point new node to the current head
    //     this.head = newNode; // update head to the new node
    // }


let list = new LinkedList()

list.insertAtBeginning(10)
list.insertAtBeginning(20)

console.log(list)
