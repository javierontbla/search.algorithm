import React from "react";

import { NodeCell, NodeStart, NodeEnd } from "./Node.styles";

const Node = ({ row, col, visited }) => {
  return (
    <>
      {row === 0 && col === 0 ? (
        <NodeStart />
      ) : row === 10 && col === 10 ? (
        <NodeEnd />
      ) : (
        <NodeCell visited={visited} />
      )}
    </>
  );
};

export default Node;
