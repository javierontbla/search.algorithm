import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, NavDropdown } from "react-bootstrap";

import { colors } from "../../colors/colors";

const { white, lightBlue } = colors;

const IconAnimation = keyframes`
  from {
    display: none;
    transition: opacity 1s ease-out;
    opacity: 0;
  } 
  to {
    opacity: 1;
    display: block;
  }
`;

export const Nav = styled(Navbar)`
  display: flex;
  background-color: #032b43 !important;
  width: 100%;
  height: 70px;
`;

export const Logo = styled(Navbar.Brand)`
  color: #f8f9fa !important;
  font-weight: bold !important;
  font-size: 24px;
  font-family: Verdana, Geneva, sans-serif;
`;

export const NavButton = styled.button`
  height: 40px;
  padding: 8px;
  font-size: 12px;
  text-transform: uppercase;
  border: 3px solid #f8f9fa;
  border-radius: 10px;
  background-color: transparent;
  color: #f8f9fa;
  margin-left: 8px;
  font-family: Verdana, Geneva, sans-serif;

  &:focus {
    outline: none;
  }
`;

export const PlayButton = styled(FontAwesomeIcon)`
  animation: ${(props) =>
    props.restart
      ? css`
          ${IconAnimation} 1s linear
        `
      : "none"};
  font-size: ${(props) => (props.restart ? "45px" : "55px")};
  margin-left: 8px;
  color: #136f63;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const AlgorithmsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 22.5%;
`;

export const PlayButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
`;

export const LogoContainer = styled.div`
  width: 22.5%;
`;

export const MazesContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 22.5%;
`;

export const DropDown = styled(NavDropdown)`
  color: white !important;
  font-size: 20px;
  font-family: Verdana, Geneva, sans-serif;
`;

export const Item = styled(NavDropdown.Item)``;

export const SocialContainer = styled.div`
  width: 22.5%;
`;

export const Content = styled.div`
  background-color: #032b43;
`;

export const Obstacles = styled(FontAwesomeIcon)`
  font-size: 42px;
  color: #136f63;

  &:hover {
    cursor: pointer;
  }
`;
