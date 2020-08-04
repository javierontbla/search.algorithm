import React from "react";
import { faCarSide, faMapPin } from "@fortawesome/free-solid-svg-icons";

import {
  NodeCell,
  NodeStart,
  NodeEnd,
  NodePath,
  IconContainer,
  Car,
  Pin,
} from "./Node.styles";

const Node = ({ visited, path, start, end, obstacle, hovering, maze }) => {
  return (
    <>
      {start ? (
        <NodeStart>
          <IconContainer>
            <Car icon={faCarSide} />
          </IconContainer>
        </NodeStart>
      ) : end ? (
        <NodeEnd>
          <IconContainer>
            <Pin icon={faMapPin} />
          </IconContainer>
        </NodeEnd>
      ) : path ? (
        <NodePath />
      ) : maze || obstacle ? (
        <NodeCell maze={"true"} />
      ) : (
        <NodeCell visited={visited} />
      )}
    </>
  );
};

export default Node;
