import React, { useEffect, useState } from "react";

import Node from "../node.component/Node";
import { MapContainer } from "./PathVisualizer.styles";

const PathVisualizer = () => {
  const [numOfNodes, setNumOfNodes] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 1612; i++) {
      setNumOfNodes((prevNodes) => [...prevNodes, i]);
    }
  }, []);

  return (
    <>
      <MapContainer>
        {numOfNodes.map((node, indx) => (
          <Node key={node} indx={indx} />
        ))}
      </MapContainer>
    </>
  );
};

export default PathVisualizer;
