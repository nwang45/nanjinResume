// src/components/NavBar.js
import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <nav>
      <a href="/" className={classes.link}>
        Home
      </a>
      <a href="/about" className={classes.link}>
        About
      </a>
      {/* Add more navigation links here */}
    </nav>
  );
};

export default NavBar;
