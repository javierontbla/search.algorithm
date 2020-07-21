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
  Car,
  Obstacle,
  Pin,
} from "./Node.styles";

const Node = ({ visited, path, start, end, obstacle, hovering }) => {
  return (
    <>
      {start ? (
        <NodeStart>
          <Car icon={faCarSide} />
        </NodeStart>
      ) : end ? (
        <NodeEnd>
          <Pin icon={faMapPin} />
        </NodeEnd>
      ) : path ? (
        <NodePath />
      ) : obstacle ? (
        <NodeCell obstacle={obstacle}>
          <Obstacle icon={faBuilding} />
        </NodeCell>
      ) : (
        <NodeCell visited={visited} hovering={hovering} />
      )}
    </>
  );
};

export default Node;
