import React, { useState } from "react";
import Project from '../Project';

const Portfolio = () => {
  //must have 6 apps with links to both (1) deployed link and (2) github repo .. ideally with MERN stack
  const [projects] = useState([
    {
      name: "Photography E-Portfolio",
      category: "React",
      description:
        "Added front-end code to build and make the photo gallery functional",
      link: ""
    },
    {
      name: "Social Network Application",
      category: "MERN Stack",
      description:
        "This app was built for a social network web application to allow users to share their thoughts, react to their friends' thoughts, and create a friend list. Used Express.js, MongoDB, Express.js, and Mongoose to build the functionality of the app",
    },
    {
      name: "Some Deep Thoughts",
      category: "MERN stack",
      description:"Social media app that enables users to log in and share their thoughts, while also interacting with other users' thoughts with reactions. It's a sing-page app that uses MERN stack for full-stack development.",
      link: "https://afternoon-reef-90509.herokuapp.com/"
    },
    {
      name: "Progressive Budget Tracker",
      category: "Mobile-first Progressive Web Application",
      description:"A budget tracker app that enables users to add or subtract funds both with and without internet connection with the help of IndexedDB and Service Worker.",
      link: "https://limitless-lowlands-47356.herokuapp.com/"
    },
    {
      name: "Express Note Taker",
      category: "Back end with Express.js",
      description:"A note taker app that enables users to write, save, and delete notes, which helps organize thoughts and track endless tasks.",
      link: "http://enigmatic-mountain-89996.herokuapp.com/"
    },
  ]);

  const [currentPage, setCurrentPage] = useState(projects[0]);

  return (
    <section>
      <h1>Portfolio</h1>
      <div className="container"> 
        {projects.map(project => (
          <Project
            name = {project.name}
            category = {project.category}
            description = {project.description}
            link = {project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
