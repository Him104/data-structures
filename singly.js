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


    insertAtEnd (data) {
        let newNode = new Node(data); // create a new Node
       if (!this.head) {  // if list is empty, make it the head
        this.head = newNode;
        this.length++
        return;
        
       }

       let temp = this.head;
       while (temp.next !== null) { //Traverse to the last node
        temp = temp.next;
       }
       temp.next = newNode; // Link last node to new node
    this.length++ 
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
            return;

        }

        let temp = this.head
        while (temp.next.next !== null) { // Traverse to the second last node

            temp = temp.next
            
        }

        temp.next = null; //Remove the last node by setting next to null
        this.length--;
    }




    printList() {
        let temp = this.head;
        let result = "";
        while (temp !== null) { // Traverse the list
            result += temp.data + " -> ";
            temp = temp.next;
        }
        result += "null";

        console.log(result);
    }

    

}

    


let list = new LinkedList()

list.insertAtBeginning(10)
list.insertAtBeginning(20)
list.insertAtEnd(30);
list.printList()
list.deleteFromBeginning()
list.printList()
list.deleteFromEnd()

list.printList()


console.log("Length : ",list.length)
