// Recursive Division Algorithm
// walls to store the maze
let mazeWalls = [];
let allDoors = [];

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const addBorderWalls = (grid, cols, rows) => {
  for (let i = 0; i < cols; i++) {
    if (i === 0 || i === cols - 1) {
      for (let j = 0; j < rows; j++) {
        mazeWalls.push(grid[i][j]);
      }
    } else {
      mazeWalls.push(grid[i][0]);
      mazeWalls.push(grid[i][rows - 1]);
    }
  }
  return grid;
};

export const recursiveDivision = (graph, cols, rows) => {
  mazeWalls = [];
  // generating the border walls of the grid
  // this returns the grid with border walls
  let grid = addBorderWalls(graph, cols, rows);

  const addHorizontalWall = (minX, maxX, y) => {
    // randomNumber this way creates only odd numbers
    const door = Math.floor(randomNumber(minX, maxX) / 2) * 2 + 1;

    for (let i = minX; i <= maxX; i++) {
      if (i !== door && !allDoors.includes(grid[i][y])) {
        mazeWalls.push(grid[i][y]);
      } else if (i === door) allDoors.push(grid[i][y]);
    }
  };

  const addVerticalWall = (minY, maxY, x) => {
    // randomNumber this way creates only odd numbers
    const door = Math.floor(randomNumber(minY, maxY) / 2) * 2 + 1;

    for (let i = minY; i <= maxY; i++) {
      if (i !== door && !allDoors.includes(grid[x][i])) {
        mazeWalls.push(grid[x][i]);
      } else if (i === door) allDoors.push(grid[x][i]);
    }
  };

  const addInnerWalls = (orientation, minX, maxX, minY, maxY) => {
    if (orientation) {
      // 27 < 2
      if (maxX - minX < 2) {
        // break recursive function
        return;
      }
      // randomNumber this way, creates an even number
      const y = Math.floor(randomNumber(minY, maxY) / 2) * 2;
      // creates only horizontal walls in the x-axis
      addHorizontalWall(minX, maxX, y);

      addInnerWalls(!orientation, minX, maxX, minY, y - 1);
      addInnerWalls(!orientation, minX, maxX, y + 1, maxY);
    } else {
      if (maxY - minY < 2) {
        // break recursive function
        return;
      }
      // randomNumber this way, creates an even number
      const x = Math.floor(randomNumber(minX, maxX) / 2) * 2;
      // creates only vertical walls in the y-axis
      addVerticalWall(minY, maxY, x);

      addInnerWalls(!orientation, minX, x - 1, minY, maxY);
      addInnerWalls(!orientation, x + 1, maxX, minY, maxY);
    }
  };

  // the walls that actually form the maze (inside)
  addInnerWalls(true, 1, cols - 2, 1, rows - 2);
  return mazeWalls;
};
