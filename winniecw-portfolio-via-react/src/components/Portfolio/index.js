import React, { useState } from "react";
// import Project from '../Project';
// import { capitalizeFirstLetter } from "../../utils/helpers";

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
      <ul className="flex-row">
        {projects.map((project) => (
          <li
            className={`mx-1 ${
                    currentPage.name === project.name &&
                    !currentPage &&
                    "navActive"
            }`}
            key={project.name}>
            <span onClick={() => {
                      // setCurrentPage(project);
                    }}>
                {/* {capitalizeFirstLetter(project.name)} */}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Portfolio;
