// src/components/Education.js
import React from 'react';
import { Card, CardContent, Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        margin: '18px', // Center the card and add margin
        borderRadius: 50, // Rounded corners
        boxShadow: theme.shadows[10], // Add some shadow for depth
        padding: theme.spacing(8), // Internal padding for the content
        backgroundColor: '#f0f0f0', // Light grey background
      },
  title: {
    fontSize: 14,
    color: theme.palette.primary.main, 
  },
  heading: {
    color: theme.palette.primary.main, 
    textAlign: 'center', // Center align the heading
    marginBottom: theme.spacing(2), // Margin bottom for spacing
  },
  column: {
    flexBasis: '50%', // Each column takes up half the width
    display: 'flex', // Added to apply Flexbox properties
    justifyContent: 'center', // Aligns child content to the right
    textAlign: 'center', // Aligns text to the right
},
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Center align the text vertically
  },
}));

const Education = () => {
  const classes = useStyles();
  return (
    <div id="education" style={{ padding: '40px 0' }}> {/* Padding on the top and bottom */}
      <h2 className={classes.heading}>Education</h2>
      <Card className={classes.root}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item className={classes.column}>
              <div className={classes.details}>
                <Typography variant="h6">
                  Centennial College
                </Typography>
                <Typography color="textSecondary">
                  Toronto, ON
                </Typography>
                <Typography color="textSecondary">
                  December 2021 - June 2024
                </Typography>
              </div>
            </Grid>
            <Grid item className={classes.column}>
              <div className={classes.details}>
                <Typography variant="h6">
                  Software Engineering Technology Advanced Diploma
                </Typography>
                <Typography color="textSecondary">
                  GPA: 3.9/4.5 (A)
                </Typography>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Education;
