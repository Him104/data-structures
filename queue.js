class Queue {
    constructor(){
        this.items =[];
    }

// enqueue(element): Add element to the rear (end of the array)
  // Time Complexity: O(1)
enqueue(element){
    this.items.push(element)

}

  // dequeue(): Remove and return the front element (from the start of the array)
  // Time Complexity: O(n) - potentially inefficient!
dequeue(){

    if(this.isEmpty()){
        console.log("queue is empty!")
    }
    this.items.shift()
}

isEmpty(){
    return this.items.length === 0
}

    size() {
        return this.items.length;
    }

    printQueue() {
        console.log(this.items.join(" <- "))
    }

}


const myQueue = new Queue()
myQueue.enqueue('A')
myQueue.enqueue('B')
myQueue.enqueue('C')
myQueue.enqueue('D')
myQueue.enqueue('E')
myQueue.dequeue();
myQueue.printQueue()

console.log("size of the queue", myQueue.size())


