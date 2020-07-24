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

export const recursiveDivision = (graph, cols, rows) => {
  // generating the border walls of the grid
  // this returns the grid with border walls
  let grid = addBorderWalls(graph, cols, rows);

  const addHWall = (minX, maxX, y, grid) => {
    const door = randomNumber(minX, maxX);

    for (let i = minX; i <= maxX; i++) {
      if (i === door) grid[y][i].maze = false;
      else grid[y][i].maze = true;
    }
  };

  const addVWall = (minX, maxX, x, grid) => {
    const door = randomNumber(minX, maxX);

    for (let i = minX; i <= maxX; i++) {
      if (i === door) grid[i][x].maze = false;
      else grid[i][x].maze = true;
    }
  };

  const addInnerWalls = (first, minX, maxX, minY, maxY) => {
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

  // the walls that actually form the maze (inside)
  addInnerWalls(true, 1, graph.length - 2, 1, graph.length - 2);
  return grid;
};
