// Dijkstra Algorithm
export const dijkstraAlgorithm = (grid, start, end) => {
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
    minQ.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
    // delete current node from minQ array
    let minValue = minQ.shift();

    if (minValue.obstacle) continue;

    visited.push(minValue);
    if (minValue === end) {
      path.push(minValue);

      while (minValue.parent) {
        path.push(minValue.parent);
        minValue = minValue.parent;
      }
      break;
    }

    for (let i = 0; i < minValue.neighbors.length; i++) {
      let neighbor = minValue.neighbors[i];
      let tempDistance = minValue.distance + 1;

      if (tempDistance < neighbor.distance) {
        neighbor.distance = tempDistance;
        neighbor.parent = minValue;
      }
    }
  }

  visited.sort((nodeA, nodeB) => nodeA.distance + nodeB.distance);
  return [visited, path];
};
