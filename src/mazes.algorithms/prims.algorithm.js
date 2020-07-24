// Prim's Algorithm
const generateRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
export const primsAlgorithm = (start) => {
  let visited = [];
  let current = start;
  visited.push(current);

  // checking neighbors of the current node only
  while (true) {
    let neighbors = [];
    for (let i = 0; i < current.neighbors.length; i++) {
      if (
        !current.neighbors[i].maze &&
        !visited.includes(current.neighbors[i])
      ) {
        neighbors.push(current.neighbors[i]);
      }
    }

    if (neighbors.length > 0) {
      let next = neighbors[generateRandom(0, neighbors.length)];
      if (next) visited.push(next);
      next.maze = true;
      current = next;
    } else {
      break;
    }
  }

  return visited;
};
