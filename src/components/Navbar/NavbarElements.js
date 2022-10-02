import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
export const Nav = styled.nav`
  background: #B80C09;
  height: 85px;
  display: flex;
  justify-content: space-evenly;
  z-index: 12;
  font-weight:bolder;
  width: 80%;
  margin: auto;
  margin-bottom: 1%;
  margin-top: 5px;
  border-style: solid;
  border-radius: 15px;
`;
  
export const NavLink = styled(Link)`
  color: #040F16;
  display: flex;
  align-items: center;
  width: fit-content;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #01BAEF;
  }
  align-items: center;
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;