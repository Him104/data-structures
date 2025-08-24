class AdjacencyMatrix {
    constructor() {
        this.vertices = []; // Array to hold the vertices
        this.matrix = []; // 2D array to hold the adjacency matrix (0 = no edge, 1 = edge exists)
    }

addVertex(vertex){
    if(!this.vertices.includes(vertex)){
        this.vertices.push(vertex);
    }

    // Add a new row and column for the new vertex
    this.matrix.push(new Array(this.vertices.length - 1).fill(0)); // create a new row filled with 0s
    for (let i = 0; i < this.matrix.length; i++) {
        this.matrix[i].push(0);
    }
}

// add edge between two vertices
addEdge(vertex1, vertex2){
    const index1 = this.vertices.indexOf(vertex1);
    const index2 = this.vertices.indexOf(vertex2);
    if(index1 !== -1 && index2 !== -1){
        this.matrix[index1][index2] = 1; // Set the edge from vertex1 to vertex2
        this.matrix[index2][index1] = 1; // Set the edge from vertex2 to vertex1 (for undirected graph)
    }
}

// remove edge between two vertices
removeEdge(vertex1, vertex2){
    const index1 = this.vertices.indexOf(vertex1);
    const index2 = this.vertices.indexOf(vertex2);
    if(index1 !== -1 && index2 !== -1){
        this.matrix[index1][index2] = 0; // Remove the edge from vertex1 to vertex2
        this.matrix[index2][index1] = 0; // Remove the edge from vertex2 to vertex1 (for undirected graph)
    }
}
// remove vertex
removeVertex(vertex){
    const index = this.vertices.indexOf(vertex); // Get index of the vertex to be removed
    if(index !== -1){
        this.vertices.splice(index, 1); // Remove the vertex from the list
        this.matrix.splice(index, 1); // Remove the corresponding row from the matrix
        for(let i = 0; i < this.matrix.length; i++){
            this.matrix[i].splice(index, 1); // Remove the corresponding column from the matrix
        }
    }
}


}
const Graph = new AdjacencyMatrix();
Graph.addVertex("A");
Graph.addVertex("B");
Graph.addEdge("A", "B");

console.log(Graph);
