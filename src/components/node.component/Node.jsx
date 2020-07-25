import React from "react";
import {
  faCarSide,
  faBuilding,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";

import {
  NodeCell,
  NodeStart,
  NodeEnd,
  NodePath,
  IconContainer,
  Car,
  Obstacle,
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
      ) : maze ? (
        <NodeCell maze={"true"} />
      ) : obstacle ? (
        <NodeCell obstacle={obstacle}>
          <IconContainer>
            <Obstacle icon={faBuilding} />
          </IconContainer>
        </NodeCell>
      ) : (
        <NodeCell visited={visited} hovering={hovering} />
      )}
    </>
  );
};

export default Node;
