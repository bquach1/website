import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About Me
          </NavLink>        
          <NavLink to="/links" activeStyle>
            Featured Projects
          </NavLink>
          <NavLink to="/qualifications" activeStyle>
            Resume and Credentials
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Info
          </NavLink>          
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;