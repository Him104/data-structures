class  MaxHeap {
    constructor() {
        this.heap = [];
    }


    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index) {
    let  parentIndex = this.getParentIndex(index);
        while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = this.getParentIndex(index);
        }

    }


    remove(){
        if(this.heap.length === 0) {
            return null;
        }   
        if(this.heap.length === 1) {
            return this.heap.pop();
        }
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return root;
    }

    // remove the root and maintain the max-heap property
    // by moving the last element to the root and heapifying down
    // to restore the max-heap property
    // This method is used to remove the maximum element from the heap
heapifyDown(index) {
        let largest = index;
        const leftChildIndex = this.getLeftChildIndex(index);
        const rightChildIndex = this.getRightChildIndex(index);

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]) {
            largest = leftChildIndex;
        }
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]) {
            largest = rightChildIndex;
        }

        if (largest !== index) {
            this.swap(index, largest);
            this.heapifyDown(largest);
        }
}

peek() {
    if (this.heap.length === 0) {
        return null; // Heap is empty
    }
    return this.heap[0]; // Return the root element
    }

    size(){
        return this.heap.length;
    }

print(){
    console.log(this.heap);
}

}


const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(15);
maxHeap.insert(5);
maxHeap.insert(7);
maxHeap.insert(40);
maxHeap.insert(50);
maxHeap.insert(60);
maxHeap.print();

console.log("removed:", maxHeap.remove());
maxHeap.print();
console.log("peek:", maxHeap.peek());
console.log("size:", maxHeap.size());