import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/website/about" activeStyle>
            About Me
          </NavLink>        
          <NavLink to="/website/links" activeStyle>
            Featured Projects
          </NavLink>
          <NavLink to="/website/qualifications" activeStyle>
            CV/Resume and Credentials
          </NavLink>
          <NavLink to="/website/contact" activeStyle>
            Contact Info
          </NavLink>          
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;