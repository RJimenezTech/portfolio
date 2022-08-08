import React from "react";
import coverImage from "../../assets/images/cover-image.jpg";

function About() {
  return (
    <section className="about-me">
      <div>
        <img
          src={coverImage}
          className="about-image"
          alt="headshot"/>
      </div>
      <div className="about-text">
        <p>My name is Robert Jimenez. I'm a software and web developer specializing in the MERN stack.</p>
        <p>
          I'm an inquisitive and motivated engineer with tons of project
          experience from a coding bootcamp on top of 10+ years of experience in
          manufacturing. I'm always seeking to improve my backend programming
          dexterity while maintaining frontend skills. I've taken up coding and
          web development in recent years. Check out my portfolio for examples of my previous projects.
          Contact me if you want to collaborate.
        </p>
        <p> 
          I'm currently working as Safety Engineer, training and designing safety
          features for machines in the gasket manufacturing industry with
          extensive OSHA compliance experience. I also have substantial rubber
          processing and rubber mold design experiwnce in the oil and gas
          industry.
        </p>
        <p>
          Language Learning <span>&#40;</span>human languages!
          <span>&#41; </span>
          has become a large part of my life as a great way to connect with
          people and deconstruct complicated topics to make them more
          manageable. You can often catch me on a language exchange call on
          WhatsApp. Having learned Spanish to an intermediate level as an
          adult, I’m currently dabbling in Modern Standard Arabic with some
          Egyptian dialect in the mix. On the list for languages that I plan
          on studying: French and American Sign Language. Let’s connect.  
        </p>
      </div>
    </section>
  );
}

export default About;
