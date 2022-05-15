import React from "react";
//take screenshots of deployed app, then include project title, link to deployed app, and link to corresponding github
const Project = (currentPage) => {
  const { name, category, description, index } = currentPage;
  return (
    <div>
      <h3>{name}</h3>
      <li>{category}</li>
      <ul>{description}</ul>
    </div>
  );
};

export default Project;
