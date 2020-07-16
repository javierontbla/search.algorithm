import styled from "styled-components";

export const NodeCell = styled.div`
  border-radius: 50%;
  height: 35px;
  width: 35px;
  margin: 1px;
  background-color: ${(props) =>
    props.obstacle ? "black" : props.visited ? "yellow" : "none"};
`;

export const NodePath = styled.div`
  border-radius: 50%;
  height: 35px;
  width: 35px;
  margin: 1px;
  background-color: blue;
`;

export const NodeStart = styled.div`
  border-radius: 50%;
  height: 35px;
  width: 35px;
  margin: 1px;
  background-color: green;
`;

export const NodeEnd = styled.div`
  border-radius: 50%;
  height: 35px;
  width: 35px;
  margin: 1px;
  background-color: red;
`;
