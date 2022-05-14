import React, { useState } from 'react';
import Project from '../Project';

const Portfolio = ({ projects }) => {
//   const [currentProject, setCurrentProject] = useState();

  const [projects] = useState([
    { 
        name: 'Photography E-Portfolio',
        category: 'React',
        description: 'Added front-end code to build and make the photo gallery functional'
    },
    { 
        name: 'API for Social Network Application',
        category: 'Back-end',
        description: 'Used Express.js, MongoDB, Express.js, and Mongoose to build the functionality of the app'
    }
  ]);



  export default Portfolio;