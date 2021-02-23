import React from 'react';
import { useHistory } from 'react-router-dom';
import LogoSrc from '../../styles/mediaAssets/jot-logo.ico';

import { fade, makeStyles, Button, AppBar, Toolbar, IconButton, 
  Typography, InputBase,Input, MenuItem, Menu} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    minHeight: 85,
  },
  root: {
    flexGrow: 1,
  },
  guestTitle: {
    flexGrow: 1,
  },
  image: {
    flexGrow: 1,
  },
  
  title: {
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    // borderRadius: theme.shape.borderRadius,
    // backgroundColor: 'color.secondary',
    // marginRight: theme.spacing(10),
    // marginLeft: 0,
    // width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'darkGrey',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

// const filterJot = async (searchTerm) => {
//   dispatch({ type: 'FILTERJOTS', payload: searchTerm });
// };

const NavBar = (props) => {
	const classes = useStyles();
	const history = useHistory();
	const token = localStorage.token;
  
  const logOut = () => {
    localStorage.clear();
    history.push('/');
  };
  //
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose} onClick={logOut}>LogOut</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      
      
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

	return token ? (
		
    <div className={classes.grow}>
      <AppBar position="static" color="color.primary" elevation={3}>
        <Toolbar>
        <Typography variant="h6" className={classes.title} color='inherit'>
            <img alt="Jots" height='54px' src={LogoSrc} className={classes.image}/>
          </Typography>
          <div className={classes.search}  >
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
			
	
	) : (
		<div className={classes.root}>
      <AppBar position="static" color='color.primary'>
        <Toolbar>
          <Typography variant="h6" className={classes.guestTitle} color='inherit'>
            <img alt="Jots" height='54px' src={LogoSrc} className={classes.image}/>
          </Typography>
          <div className={classes.grow}/>
          <Button color="inherit" onClick={() => {
            history.push('/login');
          }}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
	);
};

export default NavBar;
            

