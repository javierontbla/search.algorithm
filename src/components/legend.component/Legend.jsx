import React from "react";
import {
  faCarSide,
  faBuilding,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  Icon,
  Description,
  LegendContainer,
  Node,
} from "./Legend.styles";

const Legend = () => {
  return (
    <>
      <Container>
        <LegendContainer>
          <Icon icon={faCarSide} start={true} />
          <Description>Start</Description>
        </LegendContainer>
        <LegendContainer>
          <Icon icon={faMapPin} />
          <Description>End</Description>
        </LegendContainer>
        <LegendContainer>
          <Icon icon={faBuilding} obstacle={true} />
          <Description>Obstacle</Description>
        </LegendContainer>
        <LegendContainer>
          <Node maze={true} />
          <Description>Maze Block</Description>
        </LegendContainer>
        <LegendContainer>
          <Node visited={true} />
          <Description>Visited Nodes</Description>
        </LegendContainer>
        <LegendContainer>
          <Node path={true} />
          <Description>Final Path</Description>
        </LegendContainer>
      </Container>
    </>
  );
};

export default Legend;
