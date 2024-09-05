import React, { useEffect } from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BotComponent from "./common/BotComponent";
import Botui from "./common/Botui";

const Header = () => {
  let navigate = useNavigate();
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#0013ff82", color: 'white', height: "8%" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Home
          </NavLink>
        </Typography>
        <Box sx={{ display: "flex", color: "white", alignItems: "center", gap: 2 }}>
          <Typography variant="body1" color="inherit">
            Welcome, {localStorage.getItem("userName")}!
          </Typography>
          <Button
            onClick={(e) => {
              localStorage.clear();
              navigate("/login");
            }}
            sx={{
              background: 'white',
              color: '#0013ff82',
              fontWeight: '600',
              "&:hover": {
                backgroundColor: "#232da282",
                transform: "scale(1.05)",
                color: "#fff",
              },
            }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
      {/* <BotComponent /> */}
      <Botui />
    </AppBar>
  );
};

export default Header;
