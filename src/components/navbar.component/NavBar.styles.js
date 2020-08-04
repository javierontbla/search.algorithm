import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "react-bootstrap";

import { colors } from "../../colors/colors";

const { white, blue, green, yellow } = colors;

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
    font-size: 0.9rem;
  }

  to {
    font-size: 1rem;
  }
`;

export const Nav = styled(Navbar)`
  display: flex;
  background-color: ${blue} !important;
  width: 100%;
  height: 6vh;
`;

export const Logo = styled(Navbar.Brand)`
  color: ${white} !important;
  font-size: 1.4rem;
  font-family: "Ubuntu", sans-serif;
  letter-spacing: 1px;
`;

export const PlayButton = styled(FontAwesomeIcon)`
  animation: ${(props) =>
    props.restart
      ? css`
          ${IconAnimation} 0.6s linear
        `
      : "none"};
  font-size: ${(props) => (props.restart ? "32px" : "40px")};
  margin-left: 8px;
  color: ${white};

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
  justify-content: space-around;
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

export const Tooltip = styled.div`
  position: relative;
  font-family: "Ubuntu", sans-serif;
  font-size: 0.90rem;
  text-transform: uppercase;

  &:after {
    position: absolute;
    top: ${(props) => (props.playBtn ? "1rem" : "0.50rem")};
    height: max-content;
    width: max-content;
    background: ${blue};
    opacity: 0.96;
    left: 50%;
    color: ${white};
    padding: .5rem;
    content: '${(props) => props.data}';
    transform: translateX(-50%) translateY(100%) scale(0);
    z-index: 2;
    border-radius: .2rem;
    transition: 180ms transform;
    transform-origin: top center;
  }

  &:hover:after {
    transform: translateX(-50%) translateY(100%) scale(1);
  }
`;

export const Obstacles = styled(FontAwesomeIcon)`
  font-size: 23px;
  color: ${white};

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const Info = styled(FontAwesomeIcon)`
  font-size: 26px;
  color: ${white};
  &:hover {
    cursor: pointer;
    opacity: 0.9;
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
  height: 12vh;
  width: 11vw;
  top: 45px;
  animation: ${DropDownAnimation} 0.2s ease-out;
  z-index: 2;
  overflow: hidden;
  border-collapse: separate;
  border-radius: 0.2rem;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: ${(props) => (props.github ? "30px" : "14px")};
  color: ${white};
  margin-left: 6px;
  transition: color, 0.6s;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${white};
  font-size: 1.1rem;
  position: relative;
  font-family: "Ubuntu", sans-serif;
  height: 60px;
  letter-spacing: 1px;
  transition: color, 0.6s;

  &:hover {
    cursor: pointer;
    color: ${green};
  }
  &:hover ${Content} {
    display: flex;
    flex-direction: column;
  }
  &:hover ${Icon} {
    color: ${green};
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
  height: 4vh;
  text-transform: uppercase;
  font-family: "Ubuntu", sans-serif;
  letter-spacing: 1px;
  transition: background-color, 0.6s;
  border-bottom: 4px solid transparent;

  &:hover {
    cursor: pointer;
    background-color: ${green};
  }
  &:focus {
    outline: none;
    animation: ${ClickAnimation} 0.4s linear;
    font-size: 1rem;
  }
`;
