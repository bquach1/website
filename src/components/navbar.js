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
import { useNavigate } from "react-router-dom";
import PandaIcon from "./panda.svg";

const HeaderButton = styled(Button)`
  text-transform: none;
`;

function Header() {
  const navigate = useNavigate();

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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bruce Quach
          </Typography>
          <HeaderButton
            sx={{ textTransform: "none" }}
            color="inherit"
            onClick={() => navigate("/")}
          >
            About
          </HeaderButton>
          <HeaderButton
            sx={{ textTransform: "none" }}
            color="inherit"
            onClick={() => navigate("/links")}
          >
            Projects
          </HeaderButton>
          <HeaderButton
            sx={{ textTransform: "none" }}
            color="inherit"
            onClick={() => navigate("/resume")}
          >
            Skills and Resume/CSV
          </HeaderButton>
          <HeaderButton
            sx={{ textTransform: "none" }}
            color="inherit"
            onClick={() => navigate("/contact")}
          >
            Contact
          </HeaderButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
