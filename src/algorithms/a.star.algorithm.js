// A* Pathfinder Algorithm
const calculateHeuristic = (currentNode, endNode) => {
  // distance between the currentNode & endNode
  // sort of pythagorean theorem
  return (
    Math.abs(currentNode.i - endNode.i) + Math.abs(currentNode.j - endNode.j)
  );
};

// function gets called with start and end node only
// because, the nodes are objs that have their neighbors stored
export const aStarAlgorithm = (start, end) => {
  // nodes being evaluated
  let openSet = [];
  // nodes done evaluating
  let closedSet = [];
  // answer path nodes
  let path = [];

  // we push the start node to be evaluated and enter the loop
  openSet.push(start);

  while (true) {
    if (openSet.length > 0) {
      // start loop with openSet only containing the start node
      let closest = 0;
      for (let i = 0; i < openSet.length; i++) {
        if (openSet[i].f < openSet[closest].f) {
          closest = i;
        }
      }

      // current gets updated everytime with the neighbor node with the lowest F
      let current = openSet[closest];

      // these means the algorithm is done
      if (current === end) {
        path.push(current);
        while (current.parent) {
          // add each parent of each node that once was the current node
          path.push(current.parent);
          // going backwards
          current = current.parent;
        }
        break;
      }

      // remove current from openSet
      openSet.splice(openSet.indexOf(current), 1);
      // add current to closedSet
      closedSet.push(current);

      // get the neighbors of current
      // (current is still the same node here)
      let neighbors = current.neighbors;
      for (let i = 0; i < neighbors.length; i++) {
        // store individual neighbor
        let neighbor = neighbors[i];

        // if neighbors var isn't in closetSet arr, enter statement
        if (!closedSet.includes(neighbor) && !neighbor.obstacle) {
          let tentativeG = current.g + 1;

          let finalPath = false;
          if (openSet.includes(neighbor)) {
            if (tentativeG < neighbor.g) {
              neighbor.g = tentativeG;
              finalPath = true;
            }
          } else {
            neighbor.g = tentativeG;
            openSet.push(neighbor);
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
      return "no viable solution";
    }
  }
  return [closedSet, path];
};

const generateNeighbors = (grid, columns, rows, startI, startJ, endI, endJ) => {
  const nodeNeighbors = (i, j) => {
    let neighborsArr = [];
    // adding the neighboors to each individual node
    // and those get stored in the object node
    // managing edges with if statements
    if (i < columns - 1) neighborsArr.push(grid[i + 1][j]);
    if (i > 0) neighborsArr.push(grid[i - 1][j]);
    if (j < rows - 1) neighborsArr.push(grid[i][j + 1]);
    if (j > 0) neighborsArr.push(grid[i][j - 1]);
    if (i > 0 && j > 0) neighborsArr.push(grid[i - 1][j - 1]);
    if (i < columns - 1 && j < rows - 1) neighborsArr.push(grid[i + 1][j + 1]);
    if (i > 0 && j < rows - 1) neighborsArr.push(grid[i - 1][j + 1]);
    if (i < columns - 1 && j > 0) neighborsArr.push(grid[i + 1][j - 1]);

    return neighborsArr;
  };

  // adding the neighbors to each node, once the grid is already built
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      // adding neighbors
      grid[i][j].neighbors = nodeNeighbors(i, j);
    }
  }
  grid[startI][startJ].obstacle = false;
  grid[endI][endJ].obstacle = false;
  return aStarAlgorithm(grid[startI][startJ], grid[endI][endJ]);
};
