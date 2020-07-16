import styled from "styled-components";

import { Navbar } from "react-bootstrap";

export const Nav = styled(Navbar)`
  background-color: #343a40 !important;
  width: 98%;
  margin: 0 auto;
  margin-top: 1%;
  border-radius: 5px;
  height: 65px;
`;

export const Logo = styled(Navbar.Brand)`
  color: #f8f9fa !important;
  font-weight: bold !important;
  font-size: 22px;
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
