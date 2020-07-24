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

const addWallEntrance = () => {};

const addInnerWalls = () => {};

export const recursiveDivision = (grid, cols, rows) => {
  // generating the border walls of the grid
  addBorderWalls(grid, cols, rows);

  // adding entrances
  const entrance = addWallEntrance();
  // the walls that actually form the maze
  addInnerWalls();
};

// https://stackoverflow.com/questions/23530756/maze-recursive-division-algorithm-design
