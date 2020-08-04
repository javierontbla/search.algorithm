// Dijkstra Algorithm
import { nodeNeighbors } from "./a.star.algorithm";

export const dijkstraAlgorithm = (end, cols, rows, grid) => {
  let minQ = [];
  let visited = [];
  let path = [];

  for (let i = 0; i < grid.length; i++) {
    let column = grid[i];
    for (let j = 0; j < column.length; j++) {
      minQ.push(grid[i][j]);
    }
  }

  while (minQ.length > 0) {
    minQ.sort((nodeA, nodeB) => nodeB.distance - nodeA.distance);
    // delete current node from minQ array
    let minValue = minQ.pop();

    // if node is an obstacle continue to next iteration
    if (minValue.obstacle || minValue.maze) continue;

    if (minValue === end) {
      path.push(minValue);

      while (minValue.parent) {
        path.push(minValue.parent);
        minValue = minValue.parent;
      }
      break;
    }

    visited.push(minValue);
    minValue.neighbors = nodeNeighbors(
      minValue.i,
      minValue.j,
      cols,
      rows,
      grid
    );
    for (let i = 0; i < minValue.neighbors.length; i++) {
      let neighbor = minValue.neighbors[i];
      let tempDistance = minValue.distance + 1;

      if (tempDistance < neighbor.distance) {
        neighbor.distance = tempDistance;
        neighbor.parent = minValue;
      }
    }
  }

  return [visited, path];
};
