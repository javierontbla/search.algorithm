import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../colors/colors";

const { green, yellow, white, red, blue, black } = colors;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-around;
  width: 60%;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: ${(props) =>
    props.start ? `${black}` : props.obstacle ? `${blue}` : `${red}`};
  margin: 8px;
`;

export const Description = styled.div`
  text-transform: uppercase;
  color: ${black};
  font-size: 1rem;
  font-family: "Ubuntu", sans-serif;
`;

export const LegendContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Node = styled.div`
  height: 0;
  padding-bottom: 1.2vw;
  width: 1.2vw;
  background-color: ${(props) =>
    props.visited ? `${yellow}` : props.maze ? `${blue}` : `${green}`};
  border: 0.5px solid ${white};
  margin: 8px;
`;
