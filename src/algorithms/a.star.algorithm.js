// A* Pathfinder Algorithm

let openSet = [];
let closedSet = [];

export const aStarAlgorithm = (start, end) => {
  openSet.push(start);
  if (openSet.length > 0) {
    // continue searching
    let bestNode = 0;

    for (let i = 0; i < openSet.length; i++) {
      if (openSet[i].f < openSet[bestNode].f) {
        bestNode = i;
      }
    }

    if (openSet[bestNode] === end) {
      console.log("FOUND!!!");
    }
  } else {
    // it's done
  }
  console.log(start, end);
};
