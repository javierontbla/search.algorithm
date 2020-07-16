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
      {col === startX && row === startY ? (
        <NodeStart />
      ) : col === endX && row === endY ? (
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
