import React, { useState } from 'react';
// import Project from '../Project';

const Portfolio = () => {
//   const [currentProject, setCurrentProject] = useState();
//must have 6 apps with links to both (1) deployed link and (2) github repo .. ideally with MERN stack
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
return (
  <h1>Portfolio</h1> 
)
}




  export default Portfolio;