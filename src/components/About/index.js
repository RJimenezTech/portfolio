import React from "react";
import coverImage from "../../assets/images/headshot.jpg";
import cartoon from "../../assets/images/cover-image.jpg";

function About() {
  return (
    <section className="row d-flex justify-content-center about-me">
      <div className="col-12">
        <img
          src={coverImage}
          className="about-image"
          alt="professional headshot"/>
      </div>
      <div className="col-9 col-lg-7 about-text">
        <p className="fs-3 fw-bold">Professionally,</p>
        <p>My name is Robert Jimenez. I'm a software and web developer specializing in the MERN stack.</p>
        <p>
          I'm an inquisitive and motivated engineer with tons of project
          experience from a coding bootcamp on top of 10+ years of experience in
          manufacturing. I'm always seeking to improve my backend programming
          dexterity while maintaining frontend skills. I've taken up coding and
          web development in recent years. Check out my portfolio for examples of my previous projects.
        </p>
        <p>
          Let's collaborate.
        </p>
        <p> 
          I'm currently working as Safety Engineer, training and designing safety
          features for machines in the gasket manufacturing industry with
          extensive OSHA compliance experience. But I am working towards a career 
          shift towards wed development and software engineering. I also have 
          substantial rubber processing and rubber mold design experience in the 
          oil and gas industry.
        </p>
      </div>
      <div className="col-12">
        <img
          src={cartoon}
          className="about-image"
          alt="cartoon headshot"/>
      </div>
      <div className="col-9 col-lg-7 about-text">
        <p className="fs-3 fw-bold">Personally,</p>
        <p>
          I am passionate about Language Learnings! HUMAN languages! Languages have become a large part of my life as a 
          great way to connect with people and practice deconstructing complicated topics to 
          make them more manageable. You can often catch me on a language exchange 
          call on WhatsApp. Having learned Spanish to an intermediate level as an
          adult, I’m currently dabbling in Modern Standard Arabic with some
          Egyptian dialect in the mix. On the list for languages that I plan
          on studying: French, Swahili, and American Sign Language.  
        </p>
        <p>
          I enjoy spending time with my wife, dogs, and newborn baby (Aug 2022).
        </p>
        <p>Let's connect.</p>
      </div>
    </section>
  );
}

export default About;
