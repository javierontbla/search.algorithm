import React, { useState } from "react";
import {
  faPlayCircle,
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
  executeBfs,
  randomObstacles,
  restartingDOM,
  restartBtn,
}) => {
  const [currentAlgorithm, setCurrentAlgorithm] = useState(null);

  const executeAlgorithm = () => {
    if (!currentAlgorithm) return;

    if (currentAlgorithm === 1) executeAStar();
    if (currentAlgorithm === 2) executeDijkstra();
    if (currentAlgorithm === 3) executeBfs();
  };

  const storeAlgorithm = (algorithm) => {
    switch (algorithm) {
      case 1:
        setCurrentAlgorithm(1);
        return;
      case 2:
        setCurrentAlgorithm(2);
        return;
      case 3:
        setCurrentAlgorithm(3);
        return;
      default:
        return;
    }
  };

  const restartDom = () => {
    restartingDOM();
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
              <Button onClick={() => storeAlgorithm(1)}>A* (fast)</Button>
              <Button onClick={() => storeAlgorithm(2)}>Dijkstra (slow)</Button>
              <Button onClick={() => storeAlgorithm(3)}>BFS (slow)</Button>
            </Content>
          </Menu>
        </AlgorithmsContainer>
        <PlayButtonContainer>
          <Info icon={faInfoCircle} />
          {restartBtn ? (
            <PlayButton
              icon={faRedoAlt}
              onClick={() => restartDom()}
              restart={"true"}
            />
          ) : (
            <PlayButton
              icon={faPlayCircle}
              onClick={() => executeAlgorithm()}
            />
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
            <Icon icon={faGithub} github={"true"} />
          </a>
        </SocialContainer>
      </Nav>
    </>
  );
};

export default NavBar;
