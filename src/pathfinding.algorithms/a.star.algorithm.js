// A* Pathfinder Algorithm
const calculateHeuristic = (currentNode, endNode) => {
  // distance between the currentNode & endNode
  // sort of pythagorean theorem
  return (
    Math.abs(currentNode.i - endNode.i) + Math.abs(currentNode.j - endNode.j)
  );
};

// neighbors generation for each node
export const nodeNeighbors = (i, j, columns, rows, grid, maze) => {
  let neighbors = [];
  // adding the neighboors to each individual node
  // and those get stored in the object node
  // managing edges with if statements
  if (i < columns - 1) neighbors.push(grid[i + 1][j]);
  if (j < rows - 1) neighbors.push(grid[i][j + 1]);
  if (i > 0) neighbors.push(grid[i - 1][j]);
  if (j > 0) neighbors.push(grid[i][j - 1]);
  if (!maze) {
    if (i < columns - 1 && j < rows - 1) neighbors.push(grid[i + 1][j + 1]);
    if (i > 0 && j < rows - 1) neighbors.push(grid[i - 1][j + 1]);
    if (i > 0 && j > 0) neighbors.push(grid[i - 1][j - 1]);
    if (i < columns - 1 && j > 0) neighbors.push(grid[i + 1][j - 1]);
  }

  return neighbors;
};

// function gets called with start and end node only
// because, the nodes are objs that have their neighbors stored
export const aStarAlgorithm = (start, end, cols, rows, grid) => {
  // nodes being evaluated
  let openSet = {};
  // nodes done evaluating
  let closedSet = {};
  // answer path nodes
  let path = [];

  // we push the start node to be evaluated and enter the loop
  openSet[`${start.i}${start.j}`] = start;

  while (true) {
    if (Object.keys(openSet).length > 0) {
      // start loop with openSet only containing the start node
      let closestObj = `${start.i}${start.j}`;

      let set = Object.values(openSet);
      let result = set.reduce((res, obj) => {
        return obj.f < res.f ? obj : res;
      });

      closestObj = `${result.i}${result.j}`;
      // current gets updated everytime with the neighbor node with the lowest F
      let current = openSet[closestObj];

      // these means the algorithm is done
      if (current === end) {
        path.push(current);
        while (current.parent) {
          // add each parent of each node that once was the current node
          path.push(current.parent);
          // going backwards
          current = current.parent;
        }
        // use break, no return
        break;
      }

      // remove current from openSet
      // O(1)
      delete openSet[`${current.i}${current.j}`];
      // add current to closedSet
      closedSet[`${current.i}${current.j}`] = current;

      // only create neighbors for nodes that are being evaluated
      current.neighbors = nodeNeighbors(current.i, current.j, cols, rows, grid);
      // get the neighbors of current
      for (let i = 0; i < current.neighbors.length; i++) {
        // store individual neighbor
        let neighbor = current.neighbors[i];

        // if neighbors var isn't in closetSet arr, enter statement

        if (
          !closedSet[`${neighbor.i}${neighbor.j}`] &&
          !neighbor.obstacle &&
          !neighbor.maze
        ) {
          let tentativeG = current.g + 1;

          let finalPath = false;
          if (openSet[`${neighbor.i}${neighbor.j}`]) {
            if (tentativeG < neighbor.g) {
              neighbor.g = tentativeG;
              finalPath = true;
            }
          } else {
            neighbor.g = tentativeG;
            openSet[`${neighbor.i}${neighbor.j}`] = neighbor;
            finalPath = true;
          }

          if (finalPath) {
            // calculate temptative distance between neighbor node and end node
            neighbor.h = calculateHeuristic(neighbor, end);
            // f value of the node, this is the actual value
            // that dictate the final cost of the node
            neighbor.f = neighbor.g + neighbor.h;
            neighbor.parent = current;
          }
        }
      }
    } else {
      return false;
    }
  }
  return [Object.values(closedSet).sort((a, b) => (a.g > b.g ? 1 : -1)), path];
};
