import React from "react";

import { NodeCell, NodeStart, NodeEnd, NodePath } from "./Node.styles";

const Node = ({ row, col, visited, path, endX, endY }) => {
  return (
    <>
      {row === 0 && col === 0 ? (
        <NodeStart />
      ) : row === endX && col === endY ? (
        <NodeEnd />
      ) : path ? (
        <NodePath />
      ) : (
        <NodeCell visited={visited} />
      )}
    </>
  );
};

export default Node;
