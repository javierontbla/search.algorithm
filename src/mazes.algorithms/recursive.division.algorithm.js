// Prim's Algorithm
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const addBorderWalls = (grid, cols, rows) => {
  for (let i = 0; i < cols; i++) {
    if (i === 0 || i === cols - 1) {
      for (let j = 0; j < rows; j++) {
        grid[i][j].obstacle = true;
      }
    } else {
      grid[i][0].obstacle = true;
      grid[i][rows - 1].obstacle = true;
    }
  }

  return grid;
};

const addHWall = (minX, maxX, y, grid) => {
  const door = randomNumber(minX, maxX);

  for (let i = minX; i <= maxX; i++) {
    if (i === door) grid[y][i].obstacle = false;
    else grid[y][i].obstacle = true;
  }
};

const addVWall = (minX, maxX, x, grid) => {
  const door = randomNumber(minX, maxX);

  for (let i = minX; i <= maxX; i++) {
    if (i === door) grid[i][x].obstacle = false;
    else grid[i][x].obstacle = true;
  }
};

const addInnerWalls = (first, minX, maxX, minY, maxY, grid) => {
  if (first) {
    if (maxX - minX < 2) {
      return;
    }

    const y = randomNumber(minY, maxY);
    addHWall(minX, maxX, y, grid);

    addInnerWalls(!first, minX, maxX, minY, y - 1);
    addInnerWalls(!first, minX, maxX, y + 1, maxY);
  } else {
    if (maxY - minY < 2) {
      return;
    }

    const x = randomNumber(minX, maxX);
    addVWall(minY, maxY, x, grid);

    addInnerWalls(!first, minX, x - 1, minY, maxY);
    addInnerWalls(!first, x + 1, maxX, minY, maxY);
  }
};

export const recursiveDivision = (grid, cols, rows) => {
  // generating the border walls of the grid
  const borderGrid = addBorderWalls(grid, cols, rows);
  // the walls that actually form the maze
  addInnerWalls(true, 1, grid.length - 2, 1, grid.length - 2, borderGrid);
};
