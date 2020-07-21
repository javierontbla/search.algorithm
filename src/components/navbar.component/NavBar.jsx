import React, { useState } from "react";
import {
  faPlayCircle,
  faPauseCircle,
  faRedoAlt,
  faBuilding,
  faInfoCircle,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import {
  Nav,
  Logo,
  PlayButton,
  Obstacles,
  Info,
  Menu,
  Content,
  Button,
  Icon,
  LogoIcon,
  PlayButtonContainer,
  AlgorithmsContainer,
  LogoContainer,
  MazesContainer,
  SocialContainer,
} from "./NavBar.styles";

import Nodes from "./logo.svg";

const NavBar = ({
  executeAStar,
  executeDijkstra,
  randomObstacles,
  restartingDOM,
  restartBtn,
}) => {
  const [activeIcon, setActiveIcon] = useState(faPlayCircle);
  const [currentAlgorithm, setCurrentAlgorithm] = useState(null);

  const executeAlgorithm = () => {
    if (!currentAlgorithm) return;

    setActiveIcon(faPauseCircle);
    if (currentAlgorithm === 1) executeAStar();
    if (currentAlgorithm === 2) executeDijkstra();
  };

  const storeAlgorithm = (algorithm) => {
    switch (algorithm) {
      case 1:
        setCurrentAlgorithm(1);
        return;
      case 2:
        setCurrentAlgorithm(2);
        return;
    }
  };

  const restartDom = () => {
    restartingDOM();
    setActiveIcon(faPlayCircle);
  };

  return (
    <>
      <Nav>
        <LogoContainer>
          <Logo>PATHFINDER VISUALIZER</Logo>
          <span>
            <LogoIcon img={Nodes} />
          </span>
        </LogoContainer>
        <AlgorithmsContainer>
          <Menu>
            ALGORITHMS
            <span>
              <Icon icon={faCaretDown} />
            </span>
            <Content>
              <Button onClick={() => storeAlgorithm(1)}>A*</Button>
              <Button onClick={() => storeAlgorithm(2)}>Dijkstra</Button>
              <Button onClick={() => storeAlgorithm()}>BFS</Button>
            </Content>
          </Menu>
        </AlgorithmsContainer>
        <PlayButtonContainer>
          <Info icon={faInfoCircle} />
          {restartBtn ? (
            <PlayButton
              icon={faRedoAlt}
              onClick={() => restartDom()}
              restart={true}
            />
          ) : (
            <PlayButton icon={activeIcon} onClick={() => executeAlgorithm()} />
          )}
          <Obstacles onClick={randomObstacles} icon={faBuilding} />
        </PlayButtonContainer>
        <MazesContainer>
          <Menu>
            MAZES
            <span>
              <Icon icon={faCaretDown} />
            </span>
            <Content>
              <Button>maze1</Button>
              <Button>maze2</Button>
              <Button>maze3</Button>
            </Content>
          </Menu>
        </MazesContainer>
        <SocialContainer>
          <a
            href={"https://github.com/javierontbla/search.algorithm"}
            target="_blank"
          >
            <Icon icon={faGithub} github={true} />
          </a>
        </SocialContainer>
      </Nav>
    </>
  );
};

export default NavBar;
