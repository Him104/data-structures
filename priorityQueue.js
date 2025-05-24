class PriorityQueue{
    constructor(){
        this.items = [] 

    }

    enqueue(element, priority){

        const item = {element, priority};

        let added = false; // flag to check is element is added
        for(let i=0;i<this.items.length;i++){

            // If the priority is less than the current item's priority
      // Insert it at this position (higher priority comes first)

            if(priority < this.items[i].priority){
                this.items.splice(i,0, item)

                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push(item);
            
        }

    }

dequeue() {
    if(this.isEmpty()){
        return null;
    }

    return this.items.shift().element;
}


peek() {
    if (this.isEmpty()) {
        return null;
        
    }

    return this.items[0].element;
}


isEmpty() {
    return this.items.length === 0;
}


size() {
    return this.items.length;
}

print() {
    let result = '';
    for (let i = 0; i < this.items.length; i++) {
      result += `${this.items[i].element} (priority: ${this.items[i].priority})`;
      if (i < this.items.length - 1) {
        result += ', ';
      }
    }
    return result;
  }
}

const pq = new PriorityQueue();

pq.enqueue("Task 1", 3)
pq.enqueue("Task 2", 1)
pq.enqueue("Task 3", 2)


console.log(pq.print())

console.log(pq.dequeue())