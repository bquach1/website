import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import PandaIcon from "../assets/panda.svg";

const HeaderButton = styled(Button)`
  text-transform: none;
  color: white;
`;

const activeLinkStyle = {
  textDecoration: "underline",
  fontWeight: "bold",
};

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(45deg, #434343, #1c1c1c)",
          color: "#ffffff",
        }}
      >
        <Toolbar
          style={{
            display: "flex",
            margin: "auto",
            width: "90%",
          }}
        >
          {/* Icon Section */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <img
              src={PandaIcon}
              alt="Panda icon"
              style={{ width: "24px", height: "24px" }}
            />
          </IconButton>

          {/* Title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bruce Quach
          </Typography>

          {/* Navigation Links */}
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeLinkStyle : null)}
          >
            <HeaderButton sx={{ textTransform: "none" }}>About</HeaderButton>
          </NavLink>

          <NavLink
            to="/links"
            style={({ isActive }) => (isActive ? activeLinkStyle : null)}
          >
            <HeaderButton sx={{ textTransform: "none" }}>Projects</HeaderButton>
          </NavLink>

          <NavLink
            to="/skills"
            style={({ isActive }) => (isActive ? activeLinkStyle : null)}
          >
            <HeaderButton sx={{ textTransform: "none" }}>
              Skills and Resume/CSV
            </HeaderButton>
          </NavLink>

          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeLinkStyle : null)}
          >
            <HeaderButton sx={{ textTransform: "none" }}>Contact</HeaderButton>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
