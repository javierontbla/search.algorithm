import React, { useState } from "react";
import {
  faPlayCircle,
  faPauseCircle,
  faRedoAlt,
  faMountain,
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
  const [currentAlgorithm, setCurrentAlgorithm] = useState(null);

  const handleIcon = () => {
    activeIcon === faPlayCircle
      ? setActiveIcon(faPauseCircle)
      : setActiveIcon(faPlayCircle);

    if (currentAlgorithm === "a-star") executeAStar();
    if (currentAlgorithm === "dijkstra") executeDijkstra();
  };

  const handleChoosenAlgorithm = (algorithm) => {
    if (algorithm === "a-star") setCurrentAlgorithm("a-star");
    if (algorithm === "dijkstra") setCurrentAlgorithm("dijkstra");
  };

  return (
    <>
      <Nav>
        <LogoContainer>
          <Logo>PATHFINDER VISUALIZER</Logo>
        </LogoContainer>
        <AlgorithmsContainer>
          <Menu>
            ALGORITHMS
            <span>
              <Icon icon={faCaretDown} />
            </span>
            <Content>
              <Button onClick={() => handleChoosenAlgorithm("a-star")}>
                A*
              </Button>
              <Button onClick={() => handleChoosenAlgorithm("dijkstra")}>
                Dijkstra
              </Button>
              <Button onClick={() => handleChoosenAlgorithm()}>BFS</Button>
            </Content>
          </Menu>
        </AlgorithmsContainer>
        <PlayButtonContainer>
          <Info icon={faInfoCircle} />
          {restartBtn ? (
            <PlayButton
              icon={faRedoAlt}
              onClick={() => restartingDOM()}
              restart={true}
            />
          ) : (
            <PlayButton icon={activeIcon} onClick={() => handleIcon()} />
          )}
          <Obstacles onClick={randomObstacles} icon={faMountain} />
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
          <Icon icon={faGithub} github={true} />
        </SocialContainer>
      </Nav>
    </>
  );
};

export default NavBar;
