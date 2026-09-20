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
  color: var(--text-primary);

  &:hover {
    color: var(--accent);
  }
`;

const navLinkStyle = ({ isActive }) => ({
  color: isActive ? "var(--accent)" : "var(--text-primary)",
  fontWeight: isActive ? "bold" : "normal",
  textDecoration: "none",
});

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background:
            "linear-gradient(45deg, var(--dark-surface-hover), var(--page-background))",
          color: "var(--text-primary)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "var(--text-primary)" }}
          >
            Bruce Quach
          </Typography>

          {/* Navigation Links */}
          <NavLink to="/" style={navLinkStyle}>
            <HeaderButton sx={{ textTransform: "none" }}>About</HeaderButton>
          </NavLink>

          <NavLink to="/links" style={navLinkStyle}>
            <HeaderButton sx={{ textTransform: "none" }}>Projects</HeaderButton>
          </NavLink>

          <NavLink to="/skills" style={navLinkStyle}>
            <HeaderButton sx={{ textTransform: "none" }}>
              Skills and Resume/CSV
            </HeaderButton>
          </NavLink>

          <NavLink to="/contact" style={navLinkStyle}>
            <HeaderButton sx={{ textTransform: "none" }}>Contact</HeaderButton>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
