// src/components/FirstSection.js
import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'white',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/image.jpg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: theme.spacing(10, 2),
    textAlign: 'center',
  },
  name: {
    fontSize: '4rem',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem',
    },
  },
  contact: {
    fontSize: '2rem',
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
}));

const FirstSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.name}>Nanjin Wang</div>
      <div className={classes.contact}>647-833-9057</div>
      <div className={classes.contact}>claudiawang062@gmail.com</div>
    </div>
  );
};

export default FirstSection;
