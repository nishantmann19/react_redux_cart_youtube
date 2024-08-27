import React, { useEffect } from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BotComponent from "./common/BotComponent";

const Header = () => {
  let navigate = useNavigate();
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#ff9800", height: "8%" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
            }}
          >
            Home
          </NavLink>
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="body1" color="inherit">
            Welcome, {localStorage.getItem("userName")}!
          </Typography>
          <Button
            onClick={(e) => {
              localStorage.clear();
              navigate("/login");
            }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
      <BotComponent />
    </AppBar>
  );
};

export default Header;
