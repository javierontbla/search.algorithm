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
  //
  let openSet = [];
  //
  let closedSet = [];
  // answer path nodes
  let path = [];

  // we push the start node to be evaluated and enter the loop
  openSet.push(start);

  while (openSet.length > 0) {
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
      if (!closedSet.includes(neighbor)) {
        let tentativeG = current.g + 1;

        if (openSet.includes(neighbor)) {
          if (tentativeG < neighbor.g) {
            neighbor.g = tentativeG;
          }
        } else {
          neighbor.g = tentativeG;
          openSet.push(neighbor);
        }

        // calculate temptative distance between neighbor node and end node
        neighbor.h = calculateHeuristic(neighbor, end);
        // f value of the node, this is the actual value
        // that dictate the final cost of the node
        neighbor.f = neighbor.g + neighbor.h;
        neighbor.parent = current;
      }
    }
  }

  return [closedSet, path];
};
