// Dijkstra Algorithm
export const dijkstraAlgorithm = (grid, start, end) => {
  let minQ = [];
  let visited = [];
  let path = [];

  for (let i = 0; i < grid.length; i++) {
    let column = grid[i];
    for (let j = 0; j < column.length; j++) {
      minQ.unshift(grid[i][j]);
    }
  }

  while (minQ.length > 0) {
    minQ.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
    // delete current node from minQ array
    let minValue = minQ.shift();

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
    for (let i = 0; i < minValue.neighbors.length; i++) {
      let neighbor = minValue.neighbors[i];
      let tempDistance = minValue.distance + 1;

      if (tempDistance < neighbor.distance) {
        neighbor.distance = tempDistance;
        neighbor.parent = minValue;
      }
    }
  }
  minQ.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
  return [visited, path];
};
