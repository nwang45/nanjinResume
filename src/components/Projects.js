import React from 'react';
import '../styles.css';
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

const Projects = () => {
  const classes = useStyles();
  return (
    <div id="projects" style={{ padding: '10px 0' }}>
    <section className="projects">
      <h2 className="projects-title">Project EXPERIENCE</h2>
      <div className="projects-container">
        {/* Project 1 */}
        <div className="project-card">
          <h3 className="project-title">Tournament Bracket Website Application</h3>
          <span className="project-date">April 2023</span>
          <p className="project-description">   Engineered bracket app with HTML5, CSS3, JavaScript, Node.JS, and Angular for a MEAN website and real-time DB integration. Transformed complexity into intuitive tournament experience.</p>
          <p className="project-description">   Spearheaded strategic 20 user feedback, triggering 20% engagement surge. Transitioned sporadic use to active participation, fostering ongoing improvements.</p>
        </div>
        {/* Project 2 */}
        <div className="project-card">
          <h3 className="project-title">Airline Tickets Database Enhancement</h3>
          <span className="project-date">January 2023</span>
          <p className="project-description">Led the creation of a robust SQL-based database solution that unified previously fragmented data, catering to a wide spectrum of users, including Vice Presidents and Directors.</p>
          <p className="project-description">Demonstrated expertise in implementing advanced Oracle SQL query resulting in an impressive 40% reduction in data retrieval time and an increase in reporting accuracy.</p>
        </div>
        {/* Project 3 */}
        <div className="project-card">
          <h3 className="project-title">Software Requirements Specification Document (SRS)</h3>
          <span className="project-date">September 2022</span>
          <p className="project-description">Developed a comprehensive SRS through customer insights and collaborative scoping, achieving an impressive 95% alignment with user needs.</p>
          <p className="project-description">Translated complex technical details into a structured software blueprint, significantly reducing 50% of development time while enhancing project clarity by eliminating ambiguities.</p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Projects;
