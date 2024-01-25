// src/components/BlogPost.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

const BlogPost = ({ title, description, imageUrl }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.cardDetails}>
        <CardContent>
          <Typography component="h2" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {description}
          </Typography>
          {/* Additional content like author and timestamp */}
        </CardContent>
      </div>
      <CardMedia className={classes.cardMedia} image={imageUrl} title={title} />
    </Card>
  );
};

export default BlogPost;
