// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navigation: {
    '& button': {
      margin: theme.spacing(1),
      color: 'white', // Set the text color to white
      borderRadius: '20px',// Rounded corners for buttons
      border: '1px solid white', // Border color
      padding: theme.spacing(1, 3), // Vertical and horizontal padding

    },
  },
  sticky: {
    position: 'sticky',
    top: 0, // Stick to the top
    zIndex: theme.zIndex.drawer + 1, // Ensure it's above other elements
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={`${classes.appBar} ${classes.sticky}`}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.name}>
          Nanjin(Claudia) Wang
        </Typography>
        <div className={classes.navigation}>
          <Button href="#education">Education</Button>
          <Button href="#experience">Experience</Button>
          <Button href="#skills">Skills</Button>
          <Button href="#projects">Projects</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
