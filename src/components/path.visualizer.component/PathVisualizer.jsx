import React, { useEffect, useState } from "react";

import Node from "../node.component/Node";
import { Rows, Column } from "./PathVisualizer.styles";
import { aStarAlgorithm } from "../../algorithms/a.star.algorithm";

const PathVisualizer = () => {
  const [table, setTable] = useState([]);
  const size = 5;

  useEffect(() => {
    let grid = [];
    for (let col = 0; col <= size; col++) {
      let column = [];
      grid[col] = column;
      for (let row = 0; row <= size; row++) {
        grid[col].push({
          g: 0,
          f: 0,
          h: 0,
          row,
          col,
        });
      }
    }
    setTable(grid);
    aStarAlgorithm(grid[0][0], grid[size - 1][size - 1]);
  }, []);

  return (
    <>
      <Rows>
        {table.map((row, rowIndx) => {
          return (
            <Column key={rowIndx}>
              {row.map((column, colIndx) => (
                <Node key={colIndx} row={rowIndx} col={colIndx} />
              ))}
            </Column>
          );
        })}
      </Rows>
    </>
  );
};

export default PathVisualizer;
