import React from 'react';
import { Typography, makeStyles, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    margin: '16px', // Center the card and add margin
    borderRadius: 50, // Rounded corners
    boxShadow: theme.shadows[10], // Add some shadow for depth
    padding: theme.spacing(8), // Internal padding for the content
    backgroundColor: '#f0f0f0', // Light grey background
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  skillImage: {
    width: 150, // Set a fixed width
    height: 100, // Set a fixed height
    objectFit: 'cover', // This will cover the area without distorting aspect ratio
    transition: 'transform 0.3s ease', // Smooth transition for scaling effect
    '&:hover': {
      transform: 'scale(1.4)', // Enlarge the image on hover
    },
  },
  skillTitle: {
    color: '#191970', // Dark blue color for the heading
    textAlign: 'center', // Center align the heading
    marginBottom: theme.spacing(2),
  },
  heading: {
    color: theme.palette.primary.main, 
    textAlign: 'center', // Center align the heading
    marginBottom: theme.spacing(2), // Margin bottom for spacing
  },
}));

const Skills = () => {
  const classes = useStyles();

  return (
    <div>
    <h2 className={classes.heading}>Skills</h2>
    <div id="skills" className={classes.root}>
         
     
      <Grid container spacing={4} justify="center">
        {/* Repeat this Grid item for each skill */}
        <Grid item xs={10} sm={5} md={2} lg={2}>
          <Paper className={classes.paper}>
            <img src="/ReactJS.jpg" alt="Skill" className={classes.skillImage} />
            <Typography variant="h6">ReactJS</Typography>
            <Typography variant="body2">
          </Typography>
          </Paper>
        </Grid>
        {/* Add more skills as needed */}
        <Grid item xs={10} sm={5} md={2} lg={2}>
          <Paper className={classes.paper}>
            <img src="/AWS.png" alt="Skill" className={classes.skillImage} />
            <Typography variant="h6">AWS</Typography>
            <Typography variant="body2">
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={10} sm={5} md={2} lg={2}>
          <Paper className={classes.paper}>
            <img src="/Nodejs.jpg" alt="Skill" className={classes.skillImage} />
            <Typography variant="h6">Node.JS</Typography>
            <Typography variant="body2">
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={10} sm={5} md={2} lg={2}>
          <Paper className={classes.paper}>
            <img src="/C.png" alt="Skill" className={classes.skillImage} />
            <Typography variant="h6">C#</Typography>
            <Typography variant="body2">
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={10} sm={5} md={2} lg={2}>
          <Paper className={classes.paper}>
            <img src="/HTML,CSS,JS.jpg" alt="Skill" className={classes.skillImage} />
            <Typography variant="h6">HTML, CSS, JS</Typography>
            <Typography variant="body2">
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={10} sm={5} md={2} lg={2}>
          <Paper className={classes.paper}>
            <img src="/SQL.jpg" alt="Skill" className={classes.skillImage} />
            <Typography variant="h6">SQL</Typography>
            <Typography variant="body2">
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={10} sm={5} md={2} lg={2}>
          <Paper className={classes.paper}>
            <img src="/MongoDB.jpg" alt="Skill" className={classes.skillImage} />
            <Typography variant="h6">MongoDB</Typography>
            <Typography variant="body2">
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={10} sm={5} md={2} lg={2}>
          <Paper className={classes.paper}>
            <img src="/java.png" alt="Skill" className={classes.skillImage} />
            <Typography variant="h6">Java</Typography>
            <Typography variant="body2">
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={10} sm={5} md={2} lg={2}>
          <Paper className={classes.paper}>
            <img src="/Python.png" alt="Skill" className={classes.skillImage} />
            <Typography variant="h6">Python</Typography>
            <Typography variant="body2">
          </Typography>
          </Paper>
        </Grid>
     
      </Grid>
    </div>
    </div>
  );
};

export default Skills;
