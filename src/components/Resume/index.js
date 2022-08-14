import React from "react";
import resume from '../../assets/Robert-Jimenez-Resume.pdf';
function Resume() {
  return (
    <div className="resume">
      <p>Download here:&nbsp;
        <a href={resume}
        download='robertjimenezresume.pdf'>
           Resume
        </a>
      </p>
      <div className="d-flex justify-content-center"><hr className="w-25"></hr></div>
      <section>
        <h4>Education</h4>
            <ul>
                <li><h6 className="mb-0">Full-Stack Web Development Bootcamp</h6></li>
                <li className="mb-3 "><em>Rice University - 2022</em></li>
                
                <li><h6 className="mb-0">B.S. Mechanical Engineering</h6></li>
                <li><em>The University of Texas at Austin - 2011</em></li>
            </ul>  
      </section>
      <div className="d-flex justify-content-center"><hr className="w-25"></hr></div>
      <section>
        <h4>Experience</h4>
            <ul>
                <li><h6 className="mb-0">Safety Engineer</h6></li>
                <li className="mb-3"><em>Flexitallic-US, LLC - 2017-Present</em></li>
                
                <li><h6 className="mb-0">Manufacturing Engineer</h6></li>
                <li><em>Freudenberg OGT, 2012-2016</em></li>
            </ul>
      </section>
      <div className="d-flex justify-content-center"><hr className="w-25"></hr></div>
      <section>
        <h4>Skills</h4>
        <h6 className="mb-0">Languagues</h6>
            <ul className="mt-0">
                <li>JavaScript with Node and Express</li>
                <li>SQL: MySQL/Sequelize</li>
                <li>NoSQL: MongoDB/Mongoose</li>
            </ul>
        <h6 className="mb-0">Libraries/Frameworks</h6>
            <ul className="mt-0">
                <li>React</li>
                <li>Bootstrap</li>
                <li>Bulma</li>
                <li>jQuery</li>
                <li>Jest</li>
            </ul>
        <h6 className="mb-0">Processes</h6>
            <ul className="mt-0">
                <li>Git</li>
                <li>GitHub</li>
                <li>Agile development</li>
                <li>Test-driven development</li>
                <li>Safety Risk Assessment</li>
                <li>Rubber Molding</li>
            </ul>      
      </section>
      <div className="d-flex justify-content-center"><hr className="w-25"></hr></div>
      <section>
        <h4>Human Languages</h4>
        <ul>
            <li>English (Native)</li>
            <li>Spanish (Intermediate)</li>
            <li>Arabic (Beginner)</li>
        </ul>
      </section>
        
      
    </div>
  );
}

export default Resume;
