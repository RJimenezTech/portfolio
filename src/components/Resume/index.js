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
      <div className="horizontal"><hr></hr></div>
      <section>
        <h4>Education</h4>
            <ul>
                <li>Full-Stack Web Development Bootcamp, Rice University - 2022</li>
                <li>B.S. Mechanical Engineering, The University of Texas at Austin - 2011
                </li>
            </ul>  
      </section>
      <div className="horizontal"><hr></hr></div>
      <section>
        <h4>Experience</h4>
            <ul>
                <li>Safety Engineer, Flexitallic-US, LLC - 2017-Present</li>
                <li>Manufacturing Engineer, Freudenberg OGT, 2012-2016</li>
            </ul>
      </section>
      <div className="horizontal"><hr></hr></div>
      <section>
        <h4>Skills</h4>
        <h6>Languagues</h6>
            <ul>
                <li>JavaScript with Node and Express</li>
                <li>SQL: MySQL/Sequelize</li>
                <li>NoSQL: MongoDB/Mongoose</li>
            </ul>
        <h6>Libraries/Frameworks</h6>
            <ul>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Bulma</li>
                <li>jQuery</li>
                <li>Jest</li>
            </ul>
        <h6>Processes</h6>
            <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>Agile development</li>
                <li>Test-driven development</li>
                <li>Safety Risk Assessment</li>
                <li>Rubber Molding</li>
            </ul>      
      </section>
      <div className="horizontal"><hr></hr></div>
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
