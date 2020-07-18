import styled, { keyframes, css } from "styled-components";

import { colors } from "../../colors/colors";

const { darkGrey, yellow, lightBlue, white } = colors;

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
    opacity: 0.8;
  }

  to {
    transform: scale(1,1);
    opacity: 0.5;
  }
`;

export const NodeCell = styled.div`
  border-radius: 5px;
  height: 40px;
  width: 40px;
  margin: 1px;
  background-color: ${(props) =>
    props.obstacle ? `${lightBlue}` : props.visited ? `${yellow}` : `${white}`};
  border: 3px solid
    ${(props) =>
      props.obstacle
        ? `${lightBlue}`
        : props.visited
        ? `${yellow}`
        : `${lightBlue}`};
  opacity: 0.5;
  animation: ${(props) =>
    props.hovering
      ? css`
          ${HoverNodeAnimation} 0.3s linear
        `
      : props.visited
      ? css`
          ${NodeAnimation} 0.8s linear
        `
      : props.obstacle
      ? css`
          ${NodeAnimation} 0.3s linear
        `
      : "none"};
  &:hover {
    cursor: pointer;
  }
`;

export const NodePath = styled.div`
  border-radius: 5px;
  height: 40px;
  width: 40px;
  margin: 1px;
  background-color: ${yellow};
  opacity: 0.7;
  border: 3px solid ${darkGrey};
  animation: ${NodeAnimation} 0.8s linear;
  &:hover {
    cursor: pointer;
  }
`;

export const NodeStart = styled.div`
  border-radius: 5px;
  height: 40px;
  width: 40px;
  margin: 1px;
  border: 3px solid ${darkGrey};
  background-color: ${yellow};
  opacity: 0.7;
  &:hover {
    cursor: pointer;
  }
`;

export const NodeEnd = styled.div`
  border-radius: 5px;
  height: 40px;
  width: 40px;
  margin: 1px;
  border: 3px solid ${darkGrey};
  background-color: ${yellow};
  opacity: 0.7;
  &:hover {
    cursor: pointer;
  }
`;
