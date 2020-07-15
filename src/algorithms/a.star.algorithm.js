// A* Pathfinder Algorithm

let openSet = [];
let closedSet = [];

export const aStarAlgorithm = (start, end) => {
  openSet.push(start);
  if (openSet.length > 0) {
    // continue searching
    let closer = 0;

    for (let i = 0; i < openSet.length; i++) {
      if (openSet[i].f < openSet[closer].f) {
        closer = i;
      }
    }

    let current = openSet[closer];

    if (current === end) {
      console.log("FOUND!!!");
    }

    openSet.splice(openSet.indexOf(current), 1);
    closedSet.push(current);
  } else {
    // it's done
  }
  console.log(start, end);
};
