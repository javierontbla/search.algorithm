import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "react-bootstrap";

import { colors } from "../../colors/colors";

const { white, blue, green } = colors;

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

const ClickAnimation = keyframes`
  from {
    background-color: ${green};
    color: ${white};
  }

  to {
    background-color: ${white};
    color: ${green};
  }
`;

export const Nav = styled(Navbar)`
  display: flex;
  background-color: ${blue} !important;
  width: 100%;
  height: 70px;
`;

export const Logo = styled(Navbar.Brand)`
  color: ${white} !important;
  font-weight: bold !important;
  font-size: 1.7rem;
  font-family: Verdana, Geneva, sans-serif;
  letter-spacing: 0.5px;
`;

export const PlayButton = styled(FontAwesomeIcon)`
  animation: ${(props) =>
    props.restart
      ? css`
          ${IconAnimation} 0.6s linear
        `
      : "none"};
  font-size: ${(props) => (props.restart ? "45px" : "52px")};
  margin-left: 8px;
  color: ${white};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
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
  display: flex;
  flex-direction: row;
  align-items: center;
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
  font-size: 28px;
  color: ${white};

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const Info = styled(FontAwesomeIcon)`
  font-size: 31px;
  color: ${white};
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: ${(props) => (props.github ? "38px" : "16px")};
  color: ${white};
  margin-left: 6px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const LogoIcon = styled.div`
  width: 28px;
  height: 28px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => `${props.img}`});
  background-size: 100% 100%;
`;

export const Content = styled.div`
  display: none;
  position: absolute;
  height: 120px;
  width: 200px;
  top: 45px;
  animation: ${DropDownAnimation} 0.2s ease-out;
  z-index: 1;
  overflow: hidden;
  border-collapse: separate;
  border-radius: 5px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${white};
  font-size: 1.2rem;
  position: relative;
  font-family: Verdana, Geneva, sans-serif;
  font-weight: bold;
  height: 60px;
  letter-spacing: 0.5px;

  &:hover {
    cursor: pointer;
  }
  &:hover ${Content} {
    display: flex;
    flex-direction: column;
  }
  &:hover ${Icon} {
    opacity: 0.9;
  }
`;

export const Button = styled.button`
  display: block;
  color: ${white};
  font-size: 0.9rem;
  padding: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  background-color: ${blue};
  border: none;
  height: 40px;
  text-transform: uppercase;
  font-weight: bold;
  font-family: Verdana, Geneva, sans-serif;
  letter-spacing: 1px;
  transition: background-color, 0.6s;
  border-bottom: 4px solid transparent;

  &:hover {
    cursor: pointer;
    background-color: ${green};
  }
  &:focus {
    outline: none;
    animation: ${ClickAnimation} 0.6s ease;
    background-color: ${white};
    color: ${green};
  }
`;
