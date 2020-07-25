// BFS Algorithm

export const bfsAlgorithm = (start, end) => {
  let queue = [];
  let visited = [];
  let path = [];

  queue.push(start);
  visited.push(start);
  start.visitedBfs = true;

  while (queue.length > 0) {
    let current = queue.shift();
    if (current === end) {
      path.push(current);

      while (current.parent) {
        path.push(current.parent);
        current = current.parent;
      }
      break;
    }

    let neighbors = current.neighbors;
    neighbors.forEach((neighbor) => {
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
