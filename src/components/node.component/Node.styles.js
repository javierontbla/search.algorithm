import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../colors/colors";

const { darkGrey, yellow, lightBlue, white, green } = colors;

const NodeAnimation = keyframes`
from {
  transform: scale(0.7, 0.7)
}

to {
  transform: scale(1, 1)
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
  height: 45px;
  width: 45px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.obstacle ? "none" : props.visited ? `${lightBlue}` : `${white}`};
  border: 1.5px solid
    ${(props) =>
      props.obstacle
        ? `${white}`
        : props.visited
        ? `${white}`
        : `${lightBlue}`};
  opacity: 0.9;
  animation: ${(props) =>
    props.hovering
      ? css`
          ${HoverNodeAnimation} 0.6s ease
        `
      : props.visited
      ? css`
          ${NodeAnimation} 0.6s ease
        `
      : props.obstacle
      ? css`
          ${NodeAnimation} 0.4s ease
        `
      : "none"};
  &:hover {
    cursor: pointer;
  }
  margin: 1px;
`;

export const NodePath = styled.div`
  height: 45px;
  width: 45px;
  background-color: ${green};
  opacity: 0.9;
  border: 1.5px solid ${white};
  animation: ${NodeAnimation} 0.8s ease;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
  margin: 1px;
`;

export const NodeStart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 45px;
  border: 1.5px solid ${white};
  opacity: 0.9;
  &:hover {
    cursor: pointer;
  }
  margin: 1px;
`;

export const NodeEnd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;
  border: 1.5px solid ${white};
  opacity: 0.9;
  &:hover {
    cursor: pointer;
  }
  margin: 1px;
`;

export const Car = styled(FontAwesomeIcon)`
  font-size: 28px;
  color: #136f63;
`;

export const Obstacle = styled(FontAwesomeIcon)`
  font-size: 28px;
  color: #032b43;
`;

export const Pin = styled(FontAwesomeIcon)`
  font-size: 28px;
  color: #df2935;
`;
