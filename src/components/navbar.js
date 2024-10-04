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

const HeaderButton = styled(Button)`
  text-transform: none;
`;

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(45deg, #434343, #1c1c1c)", // Dark Chrome Gray Gradient
          color: "#ffffff", // Text color (white)
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bruce Quach
          </Typography>
          <HeaderButton color="inherit">Home</HeaderButton>
          <HeaderButton color="inherit">About</HeaderButton>
          <HeaderButton color="inherit">Projects</HeaderButton>
          <HeaderButton color="inherit">Contact</HeaderButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
