import React, { useEffect } from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { pages = [], currentPage, setCurrentPage } = props;

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentPage.name);
  // }, [currentPage]);

  return (
    <h1> Nav</h1>
    // <header className="flex-row px-1">
    //   <nav>
    //     <ul className="flex-row">
    //       <li className="mx-2">
    //         <a data-testid="about" href="#about"
    //           onClick={() => setCurrentPage(about)}>
    //           About me
    //         </a>
    //       </li>

    //       <li className={`mx-2 ${currentPage && "navActive"}`}>
    //         <span onClick={() => setCurrentPage(true)}>Contact</span>
    //       </li>

    //       <li className={`mx-2 ${currentPage && "navActive"}`}>
    //         <span onClick={() => setCurrentPage(true)}>Portfolio</span>
    //       </li>

    // {projects.map((project) => (
    //         <li
    //           className={`mx-1 ${
    //             currentProject.name === project.name &&
    //             !projectSelected &&
    //             "navActive"
    //           }`}
    //           key={project.name}
    //         >
    //           <span
    //             onClick={() => {
    //               setCurrentPage(project);
    //             }}
    //           >
    //             {capitalizeFirstLetter(project.name)}
    //           </span>
    //         </li>
    //       ))}

    //       <li className={`mx-2 ${currentPage && "navActive"}`}>
    //         <span onClick={() => setCurrentPage(true)}>Resume</span>
    //       </li>

    //     </ul>
    //   </nav>
    // </header>
  );
}

export default Nav;
