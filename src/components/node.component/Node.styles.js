import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../colors/colors";

const { yellow, white, green, red, blue, black } = colors;

const NodeAnimation = keyframes`
0% {
  transform: scale(0.6, 0.6);
  opacity: 0.6;
}

50% {
  transform: scale(0.8, 0.8);
  opacity: 0.8;
}

100% {
  transform: scale(1, 1);
  opacity: 1;
}
`;

const MazeAnimation = keyframes`
  0% {
  transform: scale(0.6, 0.6);
  opacity: 0.9;
  }

  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
`;

const HoverNodeAnimation = keyframes`
  from {
    background: ${blue};
  }

  to {
    background: ${white};
  }
`;

export const NodeCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0;
  padding-bottom: 1.8vw;
  width: 1.8vw;
  margin: 0;
  background-color: ${(props) =>
    props.maze
      ? `${blue}`
      : props.obstacle
      ? "none"
      : props.visited
      ? `${yellow}`
      : `${white}`};
  border: 0.5px solid ${blue};
  opacity: ${(props) => (props.maze ? "1" : "0.9")};
  animation: ${(props) =>
    props.hovering
      ? css`
          ${HoverNodeAnimation} 0.4s linear
        `
      : props.visited
      ? css`
          ${NodeAnimation} 0.5s linear
        `
      : props.maze
      ? css`
          ${MazeAnimation} 0.4s linear
        `
      : "none"};
  &:hover {
    cursor: pointer;
  }
`;

export const NodePath = styled.div`
  height: 0;
  padding-bottom: 1.8vw;
  width: 1.8vw;
  margin: 0;
  background-color: ${green};
  opacity: 0.9;
  border: 0.5px solid ${blue};
  animation: ${NodeAnimation} 0.5s linear;
  &:hover {
    cursor: pointer;
  }
`;

export const NodeStart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 0;
  padding-bottom: 1.8vw;
  width: 1.8vw;
  margin: 0;
  border: 0.5px solid ${blue};
  &:hover {
    cursor: pointer;
  }
`;

export const NodeEnd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0;
  padding-bottom: 1.8vw;
  width: 1.8vw;
  margin: 0;
  border: 0.5px solid ${blue};
  &:hover {
    cursor: pointer;
  }
`;

export const IconContainer = styled.div`
  animation: ${NodeAnimation} 0.4s linear;
  margin-bottom: -1.8vw;
  z-index: 1;
`;

export const Car = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: ${black};
`;

export const Obstacle = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: #032b43;
`;

export const Pin = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: ${red};
`;
