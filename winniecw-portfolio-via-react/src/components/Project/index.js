import React from "react";
//take screenshots of deployed app, then include project title, link to deployed app, and link to corresponding github
const Project = (currentPage) => {
  const { name, category, description, index } = currentPage;
  return (
    <div>
      <h3>{name}</h3>
      {/* <img
        src={require(`../../assets/${projects}/${index}.jpg`).default}
        alt="current project"
      />
      <p>{description}</p>
      <button type="button" onClick={onClose}>
        Close this modal
      </button> */}
    </div>
  );
};

export default Project;
