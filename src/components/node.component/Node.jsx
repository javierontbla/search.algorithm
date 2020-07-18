import React, { useState, useEffect } from "react";

import { NodeCell, NodeStart, NodeEnd, NodePath } from "./Node.styles";

const Node = ({ visited, path, start, end, obstacle, hovering }) => {
  return (
    <>
      {start ? (
        <NodeStart />
      ) : end ? (
        <NodeEnd />
      ) : path ? (
        <NodePath />
      ) : (
        <NodeCell visited={visited} obstacle={obstacle} hovering={hovering} />
      )}
    </>
  );
};

export default Node;
