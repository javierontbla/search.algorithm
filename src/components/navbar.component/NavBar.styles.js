import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "react-bootstrap";

import { colors } from "../../colors/colors";

const { white, yellow } = colors;

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

const DropDownAnimation = keyframes`
    0% { opacity: 0; };
    30% { opacity: 0.3; };
    40% { opacity: 0.6; };
    100% { opacity: 1; };
`;

const HoverAnimation = keyframes`
   0% { 
    background-color: #3f88c5;
    opacity: 0;
   };
 100% { 
   background-color: #3f88c5;
   opacity: 1; 
   };
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
  justify-content: space-between;
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

export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 22.5%;
`;

export const Obstacles = styled(FontAwesomeIcon)`
  font-size: 30px;
  color: ${white};

  &:hover {
    cursor: pointer;
  }
`;

export const Info = styled(FontAwesomeIcon)`
  font-size: 35px;
  color: ${white};
`;

export const Content = styled.div`
  display: none;
  position: absolute;
  height: 120px;
  width: 100%;
  margin-top: 10px;
  top: 35px;
  border-radius: 2px;
  animation: ${DropDownAnimation} 0.2s ease-out;
  z-index: 1;
  overflow: hidden;
  border-collapse: separate;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${white};
  font-size: 19px;
  position: relative;
  font-family: Verdana, Geneva, sans-serif;
  font-weight: bold;
  height: 60px;

  &:hover {
    cursor: pointer;
  }
  &:hover ${Content} {
    display: flex;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  display: block;
  color: ${white};
  font-size: 16px;
  padding: 5px;
  width: 100%;
  background-color: #032b43;
  border: none;
  height: 40px;
  text-transform: uppercase;
  font-weight: bold;
  font-family: Verdana, Geneva, sans-serif;
  letter-spacing: 1px;
  transition: border-bottom 0.8s;
  border-bottom: 3px solid transparent;

  &:hover {
    cursor: pointer;
    border-bottom: 3px solid ${yellow};
  }
  &:focus {
    outline: none;
    background-color: ${yellow};
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: ${(props) => (props.github ? "36px" : "16px")};
  color: ${white};
  margin-left: 6px;
`;
