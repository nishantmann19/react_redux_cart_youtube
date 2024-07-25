import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Box, Button, TextField, InputAdornment } from '@mui/material';
import { Notifications as NotificationsIcon, AccountCircle as AccountCircleIcon, Search as SearchIcon } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor:'#fdb001', height:'8%' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink to="/" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
            Home
          </NavLink>
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button
            component={NavLink}
            to="/blog"
            color="inherit"
            sx={{ textTransform: 'none' }}
          >
            Blog
          </Button>
          <Button
            component={NavLink}
            to="/products"
            color="inherit"
            sx={{ textTransform: 'none' }}
          >
            Products
          </Button>
          <TextField
            variant="outlined"
            placeholder="Search..."
            size="small"
            sx={{ backgroundColor: 'white', borderRadius: 1 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
          <Typography variant="body1" color="inherit">
            Welcome, Nishant
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
