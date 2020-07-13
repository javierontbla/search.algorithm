import React from "react";

import { NodeContainer, NodeStart, NodeEnd } from "./Node.styles";

const Node = ({ indx }) => {
  return (
    <>
      {indx === 680 ? (
        <NodeStart />
      ) : indx === 800 ? (
        <NodeEnd />
      ) : (
        <NodeContainer />
      )}
    </>
  );
};

export default Node;
