import styled from "styled-components";

export const NodeCell = styled.div`
  border: 1px solid black;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

export const NodeStart = styled.div`
  border: 1px solid black;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: green;
`;

export const NodeEnd = styled.div`
  border: 1px solid black;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: red;
`;
