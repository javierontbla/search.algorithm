import React, { useEffect, useState } from "react";

import Node from "../node.component/Node";
import { Rows, Column } from "./PathVisualizer.styles";

const PathVisualizer = ({ runAStar }) => {
  const [openSet, setOpenSet] = useState([]);
  const [closedSet, setCloseSet] = useState([]);
  const [table, setTable] = useState([]);

  let size = 10;
  let grid = [];

  useEffect(() => {
    // these are the columns
    for (let i = 0; i <= size; i++) {
      let column = [];
      grid[i] = column;
      // these are the rows
      for (let j = 0; j <= size; j++) {
        grid[i].push({
          f: 0,
          g: 0,
          h: 0,
          j,
          i,
          neighbors: null,
          parent: null,
          color: false,
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
    for (let i = 0; i <= size; i++) {
      for (let j = 0; j <= size; j++) {
        grid[i][j].neighbors = nodeNeighbors(i, j);
      }
    }

    // sending start & end node to algorithm function
    if (runAStar) {
      aStarAlgorithm(grid[0][0], grid[size - 1][size - 1]);
    }
  }, [runAStar]);

  // A* Pathfinder Algorithm
  const calculateHeuristic = (node, end) => {
    // distance between the current node & the end node
    return Math.abs(node.i - end.i) + Math.abs(node.j - end.j);
  };

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const aStarAlgorithm = async (start, end) => {
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
            neighbor.color = true;
            openSet.push(neighbor);
          }

          neighbor.h = calculateHeuristic(neighbor, end);
          neighbor.f = neighbor.g + neighbor.h;
          neighbor.parent = current;
        }
      }
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
                  visited={table[rowIndx][colIndx].color}
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
