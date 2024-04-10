/*
[
    [0, 1, 1, 0]
    [1, 0, 0, 1]
    [1, 0, 0, 1]
    [0, 1, 1, 0]
]
{
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "D"],
    D: ["B", "C"],
}
*/

class Graph {
    // The graph has only one property which is the adjacency list
    constructor() {
      this.adjacencyList = {};
    }
  
    addNode(node) {
      if (!this.adjacencyList[node]) {
        this.adjacencyList[node] = [];
      }
    }
  
    addConnection(node1, node2, weight) {
      if (!!this.adjacencyList[node1] && !!this.adjacencyList[node2]) {
        // if my graph is directed, I just put node1 -> node2s
        this.adjacencyList[node1].push({ node: node2, weight });
        this.adjacencyList[node2].push({ node: node1, weight });
      }
    }
  
    removeConnection(node1, node2) {
      if (!!this.adjacencyList[node1] && !!this.adjacencyList[node2]) {
        this.adjacencyList[node1] = this.adjacencyList[node1].filter(
          (node) => node !== node2,
        );
        this.adjacencyList[node2] = this.adjacencyList[node2].filter(
          (node) => node !== node1,
        );
      }
    }
  
    removeNode(node) {
      if (!!this.adjacencyList[node]) {
        for (let key in this.adjacencyList) {
          if (this.adjacencyList[key].includes(node)) {
            this.removeConnection(key, node);
          }
        }
        delete this.adjacencyList[node];
      }
    }
  }