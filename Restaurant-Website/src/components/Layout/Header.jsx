import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Avatar, Box, Divider, Drawer, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../pages/AuthContext';
import '../../styles/HeaderStyles.css';
import Logo from '../../images/logo.svg';


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { authState, setAuthState } = useContext(AuthContext);
  const { isLoggedIn, username } = authState;
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAuthState({
      isLoggedIn: false,
      username: '',
    });
    handleMenuClose();
    navigate('/login');
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography color={'goldenrod'} variant="h6" component="div" sx={{ flexGrow: 1, my: 2 }}>
        <img src={Logo} alt="logo" height={"70"} width="200" />
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/menu">Menu</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        {isLoggedIn ? <li><span onClick={handleMenuClick}>{username} {anchorEl ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span></li> : <li><NavLink to="/login">Login</NavLink></li>}
      </ul>
    </Box>
  );

  return (
    <Box>
      <AppBar component={"nav"} sx={{ bgcolor: 'black' }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{ mr: 2, display: { sm: 'none' } }} onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography color={"goldenrod"} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={Logo} alt="logo" height={"70"} width="250" />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <ul className="navigation-menu">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/menu">Menu</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              {isLoggedIn ? (
                <li>
                  <span onClick={handleMenuClick} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ width: 24, height: 24, mr: 1 }}>{username[0].toUpperCase()}</Avatar>
                    {username} {anchorEl ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </span>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Notifications</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Bookmarks</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Reviews</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Network</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Find friends</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
                    <MenuItem onClick={handleLogout}>Log out</MenuItem>
                  </Menu>
                </li>
              ) : (
                <li><NavLink to="/login">Login</NavLink></li>
              )}
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '240px' } }}>
          {drawer}
        </Drawer>
      </Box>
      <Box><Toolbar /></Box>
    </Box>
  );
};

export default Header;
