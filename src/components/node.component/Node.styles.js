import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../colors/colors";

const { yellow, white, green, red, blue, black } = colors;

const NodeAnimation = keyframes`
0% {
  transform: scale(0.6, 0.6);
  opacity: 0.6;
  border-radius: 20px;
}

25% {
  transform: scale(0.7, 0.7);
  opacity: 0.7;
  border-radius: 15px;
}

50% {
  transform: scale(0.8, 0.8);
  opacity: 0.8;
  border-radius: 10px;
}

75% {
  transform: scale(0.9, 0.9);
  opacity: 0.9;
  border-radius: 5px;
}

100% {
  transform: scale(1, 1);
  opacity: 1;
  border-radius: none;
}
`;

const HoverNodeAnimation = keyframes`
  from {
    transform: scale(1.1, 1.1);
  }

  to {
    transform: scale(1,1);
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
          ${HoverNodeAnimation} 0.4s ease
        `
      : props.visited
      ? css`
          ${NodeAnimation} 0.8s ease
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
  animation: ${NodeAnimation} 0.8s ease;
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
  animation: ${NodeAnimation} 0.8s ease;
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
