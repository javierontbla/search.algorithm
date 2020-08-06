import styled from "styled-components";
import { Modal } from "react-bootstrap";

import { colors } from "../../colors/colors";

const { blue, yellow } = colors;

export const Header = styled(Modal.Header)`
  justify-content: center !important;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "Ubuntu", sans-serif;
  font-size: 2.2rem;
  color: ${blue};
`;

export const Icon = styled.span`
  margin-left: 0.5rem;
`;
export const Body = styled.p`
  font-family: "Ubuntu", sans-serif;
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  color: ${blue};
`;

export const Step = styled.h2`
  margin-top: 0.5rem;
  font-size: 1.2rem;
  font-family: "Ubuntu", sans-serif;
  text-transform: uppercase;
  color: ${blue};
`;

export const Button = styled.button`
  font-family: "Ubuntu", sans-serif;
  padding: 0.2rem;
  border: none;
  background: transparent;
  color: ${blue};
  font-size: 1.2rem;

  &:focus {
    border: none;
    outline: none;
  }
`;

export const GifContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex
`;

export const Gif = styled.div`
  background-position: top;
  border-radius: 0.5rem;
  background-image: url(${(props) => props.img});
  background-size: cover;
  height: 220px;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 48%;
  margin: 8px;
`;
