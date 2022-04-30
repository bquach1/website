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
          <NavLink to="/blogs" activeStyle>
            Links
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Contact Info
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Featured Projects
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;