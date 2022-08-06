import React from "react";

function Nav({currentPage, handlePageChange}) {
  return (
    <header className="flex-row px-1 header-text">
      <h2 className="header-text">
        <a href="/" className="header-text">
          Robert Jimenez
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
            <li className="mx-2">
                <a 
                href="#about"
                onClick={()=>handlePageChange("About")}
                // this link changes to active once clicked
                className={currentPage === "About" ? "nav-link active" : "nav-link"}
                >
                About
                </a>
            </li>
            <li className="mx-2">
                <a 
                href="#portfolio"
                onClick={()=>handlePageChange("Portfolio")}
                className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
                >
                Portfolio
                </a>
            </li>
            <li className="mx-2">
                <a 
                href="#resume"
                onClick={()=>handlePageChange("Resume")}
                className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
                >
                Resume
                </a>
            </li>
            <li className="mx-2">
                <a 
                href="#contact"
                onClick={()=>handlePageChange("Contact")}
                className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
                >
                Contact
                </a>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
