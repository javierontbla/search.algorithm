// BFS Algorithm
import { nodeNeighbors } from "./a.star.algorithm";

export const bfsAlgorithm = (start, end, cols, rows, grid) => {
  let queue = [];
  let visited = [];
  let path = [];

  queue.push(start);
  visited.push(start);
  start.visitedBfs = true;

  while (queue.length > 0) {
    // use linked list
    let current = queue.shift();

    // when we hit the end node
    // to end the algorithm
    if (current === end) {
      path.push(current);

      while (current.parent) {
        path.push(current.parent);
        current = current.parent;
      }
      break;
    }

    // add neighbors to only nodes that are being evaluated
    current.neighbors = nodeNeighbors(current.i, current.j, cols, rows, grid);
    current.neighbors.forEach((neighbor) => {
      if (!neighbor.visitedBfs && !neighbor.obstacle && !neighbor.maze) {
        visited.push(neighbor);
        neighbor.visitedBfs = true;
        neighbor.parent = current;
        queue.push(neighbor);
      }
    });
  }

  return [visited, path];
};
