class Graph {
    constructor(){
        this.adjacencyList = {}; // empty object to store vertices and their edges
    }


// add vertex
addVertex(vertex){
    if(!this.adjacencyList[vertex]){ // check if vertex does not already exist
        this.adjacencyList[vertex] = []; // Create new vertex with empty array of neighbors

    }
}

// add edge between two vertices
addEdge(vertex1, vertex2){
    if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
        this.adjacencyList[vertex1].push(vertex2); // Add vertex2 to the adjacency list of vertex1
        this.adjacencyList[vertex2].push(vertex1); // Add vertex1 to the adjacency list of vertex2
    }
}

// remove edge between two vertices
removeEdge(vertex1, vertex2){
if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2); // Remove vertex2 from vertex1's list
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1); // Remove vertex1 from vertex2's list
    }

}

// remove vertex
removeVertex(vertex){
    if(this.adjacencyList[vertex]){
        // Remove all edges connected to the vertex
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.adjacencyList[adjacentVertex] = this.adjacencyList[adjacentVertex].filter(v => v !== vertex);
        }
        delete this.adjacencyList[vertex]; // Remove the vertex from the adjacency list
    }
}

// display the graph
display(){
    console.log(this.adjacencyList); // Log the adjacency list to display the graph structure
}

}



const graph = new Graph();
// add vertices
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

// add edges
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "A");

// remove a vertex
graph.removeVertex("B");

// console.log(graph);
graph.display();

