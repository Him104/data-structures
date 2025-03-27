class Stack {
    constructor() {
        this.items = [];
    }

// push(element): Add element to the top (end of the array)
  // Time Complexity: O(1) on average

    push(element){
        this.items.push(element);

        
    }

// pop(): Remove and return the top element (from the end of the array)
  // Time Complexity: O(1)

    pop() {
        if(this.isEmpty()){
            return "Stack is empty";
        }

        return this.items.pop()
    }

// peek(): Return the top element without removing it
  // Time Complexity: O(1)

  peek(){
    if(this.isEmpty()){
        return "Stack is empty";
    }
    // The top element is the last item in the array
return this.items[this.items.length-1]

  }

    


// check is stack is empty
// time complexity : O(1)
isEmpty(){
    return this.items.length === 0;
}

  // size(): Return the number of elements in the stack
  // Time Complexity: O(1)

size() {
    return this.items.length;
}

  // Optional: Helper method to print the stack (bottom to top)

printStack() {
    
    console.log(this.items.join(' <- '))
}

}

const myStack = new Stack();


myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.push(6);


myStack.pop();
myStack.printStack();

console.log("Stack size: ", myStack.size()); // output: 3
console.log("Top Element: ", myStack.peek())
