// src/components/WorkExperience.js
import React from 'react';
import { Card, CardContent, Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    margin: '18px',
    borderRadius: 50,
    boxShadow: theme.shadows[10],
    padding: theme.spacing(8),
    backgroundImage: 'url("/backgroundWork.jpg")', // Add your background image path here
    backgroundSize: 'cover', // Ensure the background covers the card
    backgroundPosition: 'center', // Center the background image
    color: 'black', // Set the text color to white or another color that is visible on your background
  },
  leftColumn: {
    flexBasis: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: theme.spacing(4), // Adjust the padding as needed
    paddingLeft: `${theme.spacing(6)}px !important`,
},
  rightColumn: {
    flexBasis: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingRight: theme.spacing(4), // Adjust the padding as needed
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  // Adjust heading styles if needed
  heading: {
    color: theme.palette.primary.main, // Or set a color that contrasts well with your background image
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
}));

const WorkExperience = () => {
  const classes = useStyles();
  return (
    <div id="experience" style={{ padding: '10px 0' }}>
      <h2 className={classes.heading}>Work Experience</h2>
      <Card className={classes.root}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item className={classes.leftColumn}>
              <Typography variant="h6">
                Backend Developer (Part Time)
              </Typography>
              <Typography variant="body1">
                November 2023 – Present | Taha College
              </Typography>
            </Grid>
            <Grid item className={classes.rightColumn}>
              <Typography variant="body1">
                Developing and optimizing Google Apps Scripts with JavaScript.
              </Typography>
              <Typography variant="body1">
                Implemented solutions to streamline data processes.
              </Typography>
              <Typography variant="body1">
                Designed and integrated user-friendly features in Google Sheets.
              </Typography>
              <Typography variant="body1">
                Automated program functions with triggers, reducing labor by 40%.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkExperience;
