import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './Header.styles';

/**
 * Component for showing the base project header
 *
 * @returns {React.Component}
 */
const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.navLink}>React Base Theme</Link>
          </Typography>
          <Button color="inherit">
            <Link to="/login" className={classes.navLink}>Login</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
