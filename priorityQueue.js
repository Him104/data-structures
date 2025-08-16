// Heap-based Priority Queue (Min-Heap implementation)
class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    // Helper methods for heap operations
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
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    // Add element with priority - O(log n)
    enqueue(element, priority) {
        const item = { element, priority };
        this.heap.push(item);
        this.bubbleUp(this.heap.length - 1);
    }

    // Bubble up to maintain min-heap property (lower priority number = higher priority)
    bubbleUp(index) {
        let parentIndex = this.getParentIndex(index);
        
        while (index > 0 && this.heap[index].priority < this.heap[parentIndex].priority) {
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = this.getParentIndex(index);
        }
    }

    // Remove and return highest priority element - O(log n)
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        
        if (this.heap.length === 1) {
            return this.heap.pop().element;
        }

        const highestPriority = this.heap[0].element;
        this.heap[0] = this.heap.pop(); // Move last element to root
        this.heapifyDown(0); // Restore heap property
        return highestPriority;
    }

    // Heapify down to maintain min-heap property
    heapifyDown(index) {
        let smallest = index;
        let leftChild = this.getLeftChildIndex(index);
        let rightChild = this.getRightChildIndex(index);

        // Compare with left child
        if (leftChild < this.heap.length && 
            this.heap[leftChild].priority < this.heap[smallest].priority) {
            smallest = leftChild;
        }

        // Compare with right child
        if (rightChild < this.heap.length && 
            this.heap[rightChild].priority < this.heap[smallest].priority) {
            smallest = rightChild;
        }

        // If smallest is not the current index, swap and continue
        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }

    // Peek at highest priority element - O(1)
    peek() {
        return this.isEmpty() ? null : this.heap[0].element;
    }

    // Check if queue is empty - O(1)
    isEmpty() {
        return this.heap.length === 0;
    }

    // Get size of queue - O(1)
    size() {
        return this.heap.length;
    }

    // Print all elements with priorities
    print() {
        if (this.isEmpty()) {
            return "Priority Queue is empty";
        }
        
        let result = '';
        for (let i = 0; i < this.heap.length; i++) {
            result += `${this.heap[i].element} (priority: ${this.heap[i].priority})`;
            if (i < this.heap.length - 1) {
                result += ', ';
            }
        }
        return result;
    }
}

// Example usage
const pq = new PriorityQueue();

pq.enqueue("Task 1", 3);
pq.enqueue("Task 2", 1);  // Highest priority (lowest number)
pq.enqueue("Task 3", 2);
pq.enqueue("Emergency Task", 0); // Even higher priority

console.log("Priority Queue contents:", pq.print());
console.log("Size:", pq.size());

console.log("Dequeue:", pq.dequeue()); // Should return "Emergency Task"
console.log("Dequeue:", pq.dequeue()); // Should return "Task 2"
console.log("Peek:", pq.peek());       // Should return "Task 3"

console.log("Remaining contents:", pq.print());