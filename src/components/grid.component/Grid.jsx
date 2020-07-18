import React, { useEffect, useState } from "react";

import Node from "../node.component/Node";

const Grid = ({ currentNode }) => {
  const [grid, setGrid] = useState([]);
  let nodes = [];
  let columns = 30;
  let rows = 15;

  useEffect(() => {
    // columns
    for (let col = 0; col < columns; col++) {
      let column = [];
      nodes[col] = column;
      // rows
      for (let row = 0; row < rows; row++) {
        nodes[col].push({
          col,
          row,
          distance: Infinity,
        });
      }
    }
    setGrid(nodes);
  }, []);

  // creating obstacle nodes on the grid
  const createObstacle = (i, j) => {
    let newObstacle = grid[i][j];
    const gridCopy = grid.slice();
    newObstacle = {
      ...newObstacle,
      obstacle: true,
    };
    gridCopy[i][j] = newObstacle;
    setGrid(gridCopy);
  };

  const moveStartNode = (i, j, action) => {
    let node = grid[i][j];
    let gridCopy = grid.slice();
    // move start
    if (action === 1) {
      node = {
        ...newStartNode,
        startNode: true,
      };
      // move end
    } else if (action === end) {
      // delete start node
    } else if (action === deleteStart) {
      // delete end node
    } else if (action === deleteEnd) {
    }
    newStartNode = {
      ...newStartNode,
      startNode: true,
    };
    gridCopy[i][j] = newStartNode;
    setGrid(gridCopy);
  };

  const deleteStartNode = (i, j) => {
    let oldStartNode = table[i][j];
    let gridCopy = table.slice();
    oldStartNode = {
      ...oldStartNode,
      startNode: false,
    };
    gridCopy[i][j] = oldStartNode;
    setTable(gridCopy);
  };

  const moveEndNode = (i, j) => {
    const oldEndNode = table[i][j];
    const gridCopy = table.slice();
    const newEndNode = {
      ...oldEndNode,
      endNode: true,
    };
    gridCopy[i][j] = newEndNode;
    setTable(gridCopy);
  };

  const deleteEndNode = (i, j) => {
    let oldEndNode = table[i][j];
    let gridCopy = table.slice();
    oldEndNode = {
      ...oldEndNode,
      endNode: false,
    };
    gridCopy[i][j] = oldEndNode;
    setTable(gridCopy);
  };

  return (
    <>
      {grid.map((c) => {
        return (
          <div>
            {c.map((r) => (
              <Node />
            ))}
          </div>
        );
      })}
    </>
  );
};

export default Grid;
