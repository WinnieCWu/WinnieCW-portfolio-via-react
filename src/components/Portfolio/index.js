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
    },
    {
      name: "API for Social Network Application",
      category: "Back-end",
      description:
        "Used Express.js, MongoDB, Express.js, and Mongoose to build the functionality of the app",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(projects[0]);

  return (
    <section>
      <h1>Portfolio</h1>
      <div> 
        {projects.map(project => (
          <Project
            name = {project.name}
            category = {project.category}
            description = {project.description}
          />
          // <li
          //   className={`mx-1 ${
          //           currentPage.name === project.name &&
          //           !currentPage &&
          //           "navActive"
          //   }`}
          //   key={project.name}>

          //     {project.name}
          //     <ol>{project.category}</ol>
          //     <ol>{project.description}</ol>

          //   <span onClick={() => {
          //             // setCurrentPage(project);
          //           }}>
          //       {/* {capitalizeFirstLetter(project.name)} */}
          //   </span>
          // </li>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
