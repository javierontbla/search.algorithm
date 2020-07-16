import React, { useEffect, useState } from "react";

import Node from "../node.component/Node";
import { Rows, Column } from "./PathVisualizer.styles";
import { aStarAlgorithm } from "../../algorithms/a.star.algorithm";

const PathVisualizer = ({ runAStar }) => {
  const [table, setTable] = useState([]);
  const [endX, setEndX] = useState(18);
  const [endY, setEndY] = useState(17);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  // grid size X & Y
  let size = 20;
  // grid to store the i & j values of the loops
  let grid = [];

  useEffect(() => {
    // columns
    for (let i = 0; i < size; i++) {
      let column = [];
      grid[i] = column;
      // rows
      for (let j = 0; j < size; j++) {
        // store obj on every node for A* Algorithm values
        grid[i].push({
          f: 0,
          g: 0,
          h: 0,
          j,
          i,
          neighbors: null,
          parent: null,
          visited: false,
          path: false,
        });
      }
    }
    // set grid to table state to render again
    setTable(grid);

    const nodeNeighbors = (i, j) => {
      let neighborsArr = [];
      // adding the neighboors to each individual node
      // and those get stored in the object node
      // managing edges with if statements
      if (i < size - 1) neighborsArr.push(grid[i + 1][j]);
      if (i > 0) neighborsArr.push(grid[i - 1][j]);
      if (j < size - 1) neighborsArr.push(grid[i][j + 1]);
      if (j > 0) neighborsArr.push(grid[i][j - 1]);

      return neighborsArr;
    };

    // adding the neighbors to the node, once the grid is already built
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        // adding neighbors
        grid[i][j].neighbors = nodeNeighbors(i, j);
      }
    }

    // sending start & end node to algorithm function
    if (runAStar) {
      // algorithm only needs start and end, because
      // each object has stored their neighbors
      const algorithmResult = aStarAlgorithm(
        grid[startX][startY],
        grid[endX][endY]
      );
      aStarAnimation(algorithmResult[0], algorithmResult[1]);
    }
  }, [runAStar]);

  // run the animation with the closedSet arr from the algorithm function
  const aStarAnimation = (visitedNodes, path) => {
    // animation runs after algorithm is done
    for (let i = 0; i < visitedNodes.length; i++) {
      // timeout to delay the loop for the animation
      setTimeout(() => {
        const oldNode = grid[visitedNodes[i].i][visitedNodes[i].j];
        const newGrid = grid.slice();
        const newNode = {
          ...oldNode,
          visited: true,
        };
        newGrid[visitedNodes[i].i][visitedNodes[i].j] = newNode;
        // this will make the component render again, to display the nodes changing
        setTable(newGrid);
        // once the loop reaches it's final element, run rhe path animation
        if (i === visitedNodes.length - 1) drawPath(path);
      }, 30 * i);
    }
  };

  // draw the final path, once the searching animation is done
  const drawPath = (path) => {
    for (let j = 0; j < path.length; j++) {
      setTimeout(() => {
        const oldNode = grid[path[j].i][path[j].j];
        const newGrid = grid.slice();
        const newNode = {
          ...oldNode,
          // updating the path nodes (blue nodes)
          path: true,
        };
        newGrid[path[j].i][path[j].j] = newNode;
        setTable(newGrid);
      }, 30 * j);
    }
  };

  return (
    <>
      <Rows>
        {table.map((row, rowIndx) => {
          return (
            <Column key={rowIndx}>
              {row.map((column, colIndx) => (
                <Node
                  key={colIndx}
                  row={rowIndx}
                  col={colIndx}
                  visited={table[rowIndx][colIndx].visited}
                  path={table[rowIndx][colIndx].path}
                  endX={endX}
                  endY={endY}
                  startX={startX}
                  startY={startY}
                />
              ))}
            </Column>
          );
        })}
      </Rows>
    </>
  );
};

export default PathVisualizer;
