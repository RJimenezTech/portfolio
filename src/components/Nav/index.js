import React from "react";

function Nav({currentPage, handlePageChange}) {
  return (
    <header className="px-1 pt-1 pb-0">
      <h2 className="header-text mt-1 mb-0">
        Robert Jimenez     
      </h2>
      <nav>
        <ul className="flex-row">
            <li className="mx-2">
                <a 
                href="#about"
                onClick={()=>handlePageChange("About Me")}
                // this link changes to active once clicked
                className={currentPage === "About Me" ? "nav-link active" : "nav-link"}
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
