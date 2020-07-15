// A* Pathfinder Algorithm

const calculateHeuristic = (node, end) => {
  // distance between the current node & the end node
  return Math.abs(node.i - end.i) + Math.abs(node.j - end.j);
};

export const aStarAlgorithm = (start, end) => {
  let openSet = [];
  let closedSet = [];
  let path = [];

  openSet.push(start);

  while (openSet.length > 0) {
    // continue searching
    let closest = 0;

    for (let i = 0; i < openSet.length; i++) {
      if (openSet[i].f < openSet[closest].f) {
        closest = i;
      }
    }

    let current = openSet[closest];

    if (current === end) {
      path.push(current);
      while (current.parent) {
        path.push(current.parent);
        current = current.parent;
      }
      console.log("FOUND!!!");
      break;
    }

    openSet.splice(openSet.indexOf(current), 1);
    closedSet.push(current);

    let neighbors = current.neighbors;
    for (let i = 0; i < neighbors.length; i++) {
      let neighbor = neighbors[i];

      if (!closedSet.includes(neighbor)) {
        let gScore = current.g + 1;

        if (openSet.includes(neighbor)) {
          if (gScore < neighbor.g) {
            neighbor.g = gScore;
          }
        } else {
          neighbor.g = gScore;
          openSet.push(neighbor);
        }

        neighbor.h = calculateHeuristic(neighbor, end);
        neighbor.f = neighbor.g + neighbor.h;
        neighbor.parent = current;
      }
    }
  }
  console.log("OUT!!!");
  return [closedSet, path];
};
