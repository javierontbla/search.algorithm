import React from "react";

import { NodeCell, NodeStart, NodeEnd, NodePath } from "./Node.styles";

const Node = ({
  row,
  col,
  visited,
  path,
  endX,
  endY,
  startX,
  startY,
  obstacle,
}) => {
  return (
    <>
      {row === startX && col === startY ? (
        <NodeStart />
      ) : row === endX && col === endY ? (
        <NodeEnd />
      ) : path ? (
        <NodePath />
      ) : (
        <NodeCell visited={visited} obstacle={obstacle} />
      )}
    </>
  );
};

export default Node;
