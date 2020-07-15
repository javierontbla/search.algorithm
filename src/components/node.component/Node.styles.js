import styled from "styled-components";

export const NodeCell = styled.div`
  border: 1px solid black;
  height: 30px;
  width: 30px;
  background-color: ${(props) => (props.visited ? "yellow" : "none")};
`;

export const NodePath = styled.div`
  border: 1px solid black;
  height: 30px;
  width: 30px;
  background-color: blue;
`;

export const NodeStart = styled.div`
  border: 1px solid black;
  height: 30px;
  width: 30px;
  background-color: green;
`;

export const NodeEnd = styled.div`
  border: 1px solid black;
  height: 30px;
  width: 30px;
  background-color: red;
`;
