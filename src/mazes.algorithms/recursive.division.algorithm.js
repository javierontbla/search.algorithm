// Prim's Algorithm
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const addBorderWalls = (grid, cols, rows) => {
  for (let i = 0; i < cols; i++) {
    if (i === 0 || i === cols - 1) {
      for (let j = 0; j < rows; j++) {
        grid[i][j].maze = true;
      }
    } else {
      grid[i][0].maze = true;
      grid[i][rows - 1].maze = true;
    }
  }
  return grid;
};

export const recursiveDivision = (graph, cols, rows) => {
  // generating the border walls of the grid
  // this returns the grid with border walls
  let grid = addBorderWalls(graph, cols, rows);

  const addHorizontalWall = (minX, maxX, y) => {
    const door = Math.floor(randomNumber(minX, maxX) / 2) * 2 + 1;

    for (let i = minX; i <= maxX; i++) {
      if (!grid[i][y].startNode && !grid[i][y].endNode) {
        if (i === door) grid[i][y].maze = false;
        else grid[i][y].maze = true;
      }
    }
  };
  // (1 , 13, r)
  const addVerticalWall = (minY, maxY, x) => {
    const door = Math.floor(randomNumber(minY, maxY) / 2) * 2 + 1;

    for (let i = minY; i <= maxY; i++) {
      if (!grid[x][i].startNode && !grid[x][i].endNode) {
        if (i === door) grid[x][i].maze = false;
        else grid[x][i].maze = true;
      }
    }
  };

  //                    (true,   1,    28,   1,    13 )
  const addInnerWalls = (first, minX, maxX, minY, maxY) => {
    if (first) {
      // 27 < 2
      if (maxX - minX < 2) {
        return;
      }
      // (1, 13)
      const y = Math.floor(randomNumber(minY, maxY) / 2) * 2;
      //                (1,    28,  r)
      addHorizontalWall(minX, maxX, y);

      addInnerWalls(!first, minX, maxX, minY, y - 1);
      addInnerWalls(!first, minX, maxX, y + 1, maxY);
    } else {
      if (maxY - minY < 2) {
        return;
      }

      const x = randomNumber(minX, maxX);
      addVerticalWall(minY, maxY, x);

      addInnerWalls(!first, minX, x - 1, minY, maxY);
      addInnerWalls(!first, x + 1, maxX, minY, maxY);
    }
  };

  // the walls that actually form the maze (inside)
  //           (true, 1,    28,    1,    13   )
  addInnerWalls(true, 1, cols - 2, 1, rows - 2);
  return grid;
};
