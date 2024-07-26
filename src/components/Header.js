import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Box, Button, TextField, InputAdornment } from '@mui/material';
import { Notifications as NotificationsIcon, AccountCircle as AccountCircleIcon, Search as SearchIcon } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor:'#076a50', height:'8%' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink to="/" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
            Home
          </NavLink>
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body1" color="inherit">
            Welcome, Nishant
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
