import React, { useEffect, useState } from "react";

import Node from "../node.component/Node";
import { Rows, Column } from "./PathVisualizer.styles";
import { aStarAlgorithm } from "../../algorithms/a.star.algorithm";

const PathVisualizer = ({ runAStar }) => {
  const [table, setTable] = useState([]);
  const [endX, setEndX] = useState(14);
  const [endY, setEndY] = useState(14);

  let size = 15;
  let grid = [];

  useEffect(() => {
    // these are the columns
    for (let i = 0; i < size; i++) {
      let column = [];
      grid[i] = column;
      // these are the rows
      for (let j = 0; j < size; j++) {
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
    setTable(grid);

    const nodeNeighbors = (i, j) => {
      let neighborsArr = [];
      // adding the neighboors of each individual node
      if (i < size - 1) {
        neighborsArr.push(grid[i + 1][j]);
      }
      if (i > 0) {
        neighborsArr.push(grid[i - 1][j]);
      }
      if (j < size - 1) {
        neighborsArr.push(grid[i][j + 1]);
      }
      if (j > 0) {
        neighborsArr.push(grid[i][j - 1]);
      }
      return neighborsArr;
    };

    // adding the neighbors to the node, once the grid is already built
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        grid[i][j].neighbors = nodeNeighbors(i, j);
      }
    }

    // sending start & end node to algorithm function
    if (runAStar) {
      const visitedNodes = aStarAlgorithm(grid[0][0], grid[endX][endY]);
      animation(visitedNodes[0], visitedNodes[1]);
    }
  }, [runAStar]);

  const animation = (visitedNodes, path) => {
    for (let i = 0; i < visitedNodes.length; i++) {
      setTimeout(() => {
        const oldNode = grid[visitedNodes[i].i][visitedNodes[i].j];
        const newGrid = grid.slice();
        const newNode = {
          ...oldNode,
          visited: true,
        };
        newGrid[visitedNodes[i].i][visitedNodes[i].j] = newNode;
        setTable(newGrid);
        if (i === visitedNodes.length - 1) runPath(path);
      }, 30 * i);
    }
  };

  const runPath = (path) => {
    for (let j = 0; j < path.length; j++) {
      setTimeout(() => {
        const oldNode = grid[path[j].i][path[j].j];
        const newGrid = grid.slice();
        const newNode = {
          ...oldNode,
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
