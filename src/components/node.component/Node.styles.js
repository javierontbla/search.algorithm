import styled, { keyframes, css } from "styled-components";

const NodeAnimation = keyframes`
from {
  transform: scale(0.7, 0.7)
}

to {
  transform: scale(1, 1)
}
`;

export const NodeCell = styled.div`
  border-radius: 50%;
  height: 30px;
  width: 30px;
  margin: 1px;
  background-color: ${(props) =>
    props.obstacle ? "#56cfe1" : props.visited ? "#ffd166" : "#FFFCFF"};
  border: 3px solid
    ${(props) =>
      props.obstacle ? "#56cfe1" : props.visited ? "#ffd166" : "#56cfe1"};
  opacity: 0.5;
  animation: ${(props) =>
    props.visited
      ? css`
          ${NodeAnimation} 0.8s linear
        `
      : props.obstacle
      ? css`
          ${NodeAnimation} 0.6s linear
        `
      : "none"};
`;

export const NodePath = styled.div`
  border-radius: 50%;
  height: 30px;
  width: 30px;
  margin: 1px;
  background-color: #ffd166;
  opacity: 0.7;
  border: 3px solid #001524;
  animation: ${NodeAnimation} 1s linear;
`;

export const NodeStart = styled.div`
  border-radius: 50%;
  height: 30px;
  width: 30px;
  margin: 1px;
  border: 3px solid #001524;
  background-color: #ffd166;
  opacity: 0.7;
`;

export const NodeEnd = styled.div`
  border-radius: 50%;
  height: 30px;
  width: 30px;
  margin: 1px;
  border: 3px solid #001524;
  background-color: #ffd166;
  opacity: 0.7;
`;
