import React from "react";

import { NodeCell, NodeStart, NodeEnd } from "./Node.styles";

const Node = ({ row, col }) => {
  return (
    <>
      {row === 0 && col === 0 ? (
        <NodeStart width={"30px"} height={"30px"} />
      ) : row === 5 && col === 5 ? (
        <NodeEnd width={"30px"} height={"30px"} />
      ) : (
        <NodeCell width={"30px"} height={"30px"} />
      )}
    </>
  );
};

export default Node;
