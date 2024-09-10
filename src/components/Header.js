import React, { useEffect } from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BotComponent from "./common/BotComponent";
import Botui from "./common/Botui";

const Header = () => {
  let navigate = useNavigate();
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#6175ce",
        color: "white",
        height: "fit-content",
      }}
    >
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
        <Box
          sx={{ display: "flex", color: "white", alignItems: "center", gap: 2 }}
        >
          <Typography variant="body1" color="inherit">
            Welcome, {localStorage.getItem("userName")}!
          </Typography>
          
          <div class="head__cart">
						<div class="head__cart__icon">
            <img src={ require("../../src/assetes/image/cart.svg").default} onClick={(e)=>{
              navigate("/cartpage");
            }}/>
            {/* <div class="head__cart__count">2</div> */}
						</div>
					</div>
          <Button
            onClick={(e) => {
              localStorage.clear();
              navigate("/login");
            }}
            sx={{
              background: "white",
              color: "#6175ce",
              fontWeight: "600",
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
