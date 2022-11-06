/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import Amad from '../../assets/recentprojects/amad-furniture.png';
import Sigaarchitect from '../../assets/recentprojects/sigaarchitect.png';
import Detailingpatrol from '../../assets/recentprojects/detailingpatrol.png';
import Ozztravel from '../../assets/recentprojects/ozztravel.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'React Portfolio', 
      description: `Designed and developed a ReactJS portfolio 
      with fancy 3D animations using Three.js for 
      the background element.`,
      alter: 'React Portfolio',
      image: `${Portfolio}`,
    },
    { 
      id: 2,
      title: 'Amad Furniture', 
      description: `An simple project website built using
      ReactJS and styled components.`,
      alter: 'Amad Furniture',
      image: `${Amad}`,
    },
    { 
      id: 3,
      title: 'sigaarchitect', 
      description: `Company in the field of Design & Build services`,
      alter: 'sigaarchitect',
      image: `${Sigaarchitect}`,
    },
    { 
      id: 4,
      title: 'Detailing Patrol', 
      description: `Detailing patrol is a service web app Car Salon Treatments.`,
      alter: 'Detailing Patrol',
      image: `${Detailingpatrol}`,
    },
    { 
      id: 5,
      title: 'Ozztravel', 
      description: `A website project for the travel and tour agency services
      built using Wordpress and PHP with integrated SEO tools to help
      the business ramp up its prospects and lead generation.`,
      alter: 'Ozztravel',
      image: `${Ozztravel}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
