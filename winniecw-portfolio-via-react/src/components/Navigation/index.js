import React, { useEffect } from "react";

function Nav(props) {
  const {pages = [], currentPage, setCurrentPage } = props;

  return (
    <header className="flex-row px-1">
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about"
              onClick={() => setCurrentPage("About")}>
              About me
            </a>
          </li>

          <li className={`mx-2 ${currentPage && "navActive"}`}>
            <span onClick={() => setCurrentPage("Contact")}>Contact</span>
          </li>

          <li className={`mx-2 ${currentPage && "navActive"}`}>
            <span onClick={() => setCurrentPage("Portfolio")}>Portfolio</span>
          </li>

          <li className={`mx-2 ${currentPage && "navActive"}`}>
            <span onClick={() => setCurrentPage("Resume")}>Resume</span>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Nav;
