import React, { useState } from "react";
import {
  faPlayCircle,
  faPauseCircle,
  faRedoAlt,
  faTree,
} from "@fortawesome/free-solid-svg-icons";

import {
  Nav,
  DropDown,
  Item,
  Logo,
  NavButton,
  PlayButton,
  Content,
  Obstacles,
  PlayButtonContainer,
  AlgorithmsContainer,
  LogoContainer,
  MazesContainer,
  SocialContainer,
} from "./NavBar.styles";

const NavBar = ({
  executeAStar,
  executeDijkstra,
  randomObstacles,
  restartingDOM,
  restartBtn,
}) => {
  const [activeIcon, setActiveIcon] = useState(faPlayCircle);

  const handleIcon = () => {
    activeIcon === faPlayCircle
      ? setActiveIcon(faPauseCircle)
      : setActiveIcon(faPlayCircle);
  };

  return (
    <>
      <Nav>
        <LogoContainer>
          <Logo>PATHFINDER VISUALIZER</Logo>
        </LogoContainer>
        <AlgorithmsContainer>
          <DropDown title="ALGORITHMS">
            <Content>
              <Item onClick={executeAStar}>A*</Item>
              <Item onClick={executeDijkstra}>Dijkstra</Item>
              <Item>BFS</Item>
            </Content>
          </DropDown>
        </AlgorithmsContainer>
        <PlayButtonContainer>
          {restartBtn ? (
            <PlayButton
              icon={faRedoAlt}
              onClick={() => restartingDOM()}
              restart={true}
            />
          ) : (
            <PlayButton icon={activeIcon} onClick={() => handleIcon()} />
          )}
          <Obstacles onClick={randomObstacles} icon={faTree} />
        </PlayButtonContainer>
        <MazesContainer>
          <DropDown title="MAZES"></DropDown>
        </MazesContainer>
        <SocialContainer></SocialContainer>
      </Nav>
    </>
  );
};

export default NavBar;
