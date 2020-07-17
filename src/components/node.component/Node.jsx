import React, { useState, useEffect } from "react";

import { NodeCell, NodeStart, NodeEnd, NodePath } from "./Node.styles";
import { screenDimensions } from "../../hooks/screen.size.hook";

const Node = ({ visited, path, start, end, obstacle, hovering }) => {
  const windowSize = screenDimensions();

  useEffect(() => {
    console.log(windowSize);
  }, []);

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
