// BFS Algorithm
import { nodeNeighbors } from "./a.star.algorithm";

// Queue Implementation

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  // first item
  peek() {
    const value = this.first;
    this.dequeue(this.first);
    return value;
  }
  // put in
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    this.length++;
  }

  // put out
  dequeue() {
    if (this.length === 0) return;
    if (this.length === 1) this.last = null;

    const newStart = this.first.next;
    this.first = newStart;
    this.length--;
  }
}

export const bfsAlgorithm = (start, end, cols, rows, grid) => {
  let queue = new Queue();
  let visited = [];
  let path = [];

  queue.enqueue(start);
  visited.push(start);
  start.visitedBfs = true;

  while (queue.length > 0) {
    let current = queue.peek();

    // when we hit the end node
    // to end the algorithm
    if (current.value === end) {
      path.push(current.value);

      while (current.value.parent) {
        path.push(current.value.parent);
        current.value = current.value.parent;
      }
      break;
    }

    // add neighbors to only nodes that are being evaluated
    current.value.neighbors = nodeNeighbors(
      current.value.i,
      current.value.j,
      cols,
      rows,
      grid
    );
    current.value.neighbors.forEach((neighbor) => {
      if (!neighbor.visitedBfs && !neighbor.obstacle && !neighbor.maze) {
        visited.push(neighbor);
        neighbor.visitedBfs = true;
        neighbor.parent = current.value;
        queue.enqueue(neighbor);
      }
    });
  }

  return [visited, path];
};
