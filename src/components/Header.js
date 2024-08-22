import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Box, Button, TextField, InputAdornment } from '@mui/material';
import { Notifications as NotificationsIcon, AccountCircle as AccountCircleIcon, Search as SearchIcon } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BotComponent from './common/BotComponent';

const Header = () => {
  let navigate = useNavigate();
  return (
    <AppBar position="fixed" sx={{ backgroundColor:'rgba(255, 225, 0)', height:'8%' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink to="/" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
            Home
          </NavLink>
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body1" color="inherit">
            Welcome, {localStorage.getItem("userName")}!
          </Typography>
          <button onClick={(e)=> {localStorage.clear(); navigate('/login')}} >Logout</button>
        </Box>
      </Toolbar>
      <BotComponent />
    </AppBar>
  );
};

export default Header;
