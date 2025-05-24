class CircularQueue {
    /**
     * Initialize a new circular queue with specified capacity
     * @param {number} capacity - Maximum number of elements the queue can hold
     */
    constructor(capacity) {
      this.items = new Array(capacity); // Array to store queue elements
      this.capacity = capacity;         // Maximum size of the queue
      this.size = 0;                    // Current number of elements in the queue
      this.front = -1;                  // Index of the front element (for removal)
      this.rear = -1;                   // Index of the rear element (for insertion)
    }
  
    isFull() {
      return this.size === this.capacity; // Queue is full when size equals capacity
    }
  
    isEmpty() {
      return this.size === 0; // Queue is empty when size is zero
    }
  
    enqueue(element) {
      // Check if queue is already full
      if (this.isFull()) {
        console.log("Queue is full"); // Notify user queue is full
        return false;                 // Return false to indicate failure
      }
  
      // If this is the first element, set front to 0
      if (this.isEmpty()) {
        this.front = 0; // Initialize front index for the first element
      }
  
      // Calculate the new rear position with wrap-around
      this.rear = (this.rear + 1) % this.capacity; // Circular increment of rear
      
      // Store the new element at the rear position
      this.items[this.rear] = element; // Add element to the calculated position
      
      // Increment the size counter
      this.size++; // Track that we've added an element
      
      return true; // Return true to indicate success
    }
  
    
    dequeue() {
      // Check if queue is already empty
      if (this.isEmpty()) {
        console.log("Queue is empty"); // Notify user queue is empty
        return null;                   // Return null to indicate failure
      }
  
      // Get the element at the front position
      const element = this.items[this.front]; // Save the front element
      
      // Clear the slot where the element was
      this.items[this.front] = null; // Remove reference to the element
      
      // Calculate the new front position with wrap-around
      this.front = (this.front + 1) % this.capacity; // Circular increment of front
      
      // Decrement the size counter
      this.size--; // Track that we've removed an element
      
      // Reset pointers if queue becomes empty
      if (this.isEmpty()) {
        this.front = -1; // Reset front to initial state
        this.rear = -1;  // Reset rear to initial state
      }
      
      return element; // Return the removed element
    }
  
    
    peek() {
      if (this.isEmpty()) {
        console.log("Queue is empty"); // Notify user queue is empty
        return null;                   // Return null to indicate failure
      }
      return this.items[this.front]; // Return front element without removing it
    }
  
    
    peekRear() {
      if (this.isEmpty()) {
        console.log("Queue is empty"); // Notify user queue is empty
        return null;                   // Return null to indicate failure
      }
      return this.items[this.rear]; // Return rear element without removing it
    }
  
    /**
     * Display the current state of the queue
     */
    print() {
      if (this.isEmpty()) {
        console.log("Queue is empty"); // Notify user queue is empty
        return;                        // Exit the function
      }
  
      let result = "Queue: Front -> "; // Start the output string
      let count = 0;                   // Initialize counter for traversal
      let i = this.front;              // Start from the front index
      
      // Loop through all elements in the queue
      while (count < this.size) {
        result += this.items[i] + " ";              // Add current element to output
        i = (i + 1) % this.capacity;                // Move to next position with wrap-around
        count++;                                    // Increment counter
      }
      
      result += "<- Rear";                          // Complete the output string
      console.log(result);                          // Print the queue elements
      console.log(`Size: ${this.size}/${this.capacity} (Front: ${this.front}, Rear: ${this.rear})`); // Print queue stats
    }
  }
  
  // Example usage
  const queue = new CircularQueue(5); // Create a queue with capacity 5
  queue.enqueue(1);                  
  queue.enqueue(2);                   
  queue.enqueue(3);                   
  queue.enqueue(4);                   
  queue.enqueue(5);                   
  queue.enqueue(6);                   
  queue.dequeue();                    
  queue.print();                 
  