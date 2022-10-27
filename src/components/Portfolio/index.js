import React from 'react';
import habit from '../../assets/images/projects/habitual-tracker.png';
import tweezer from "../../assets/images/projects/tweezer-app.png";
import occasional from '../../assets/images/projects/occasional-movie.png';
import weather from '../../assets/images/projects/weather-dashboard.png';
import schedule from '../../assets/images/projects/workday-scheduler.png';

function Portfolio() {
    const projects = [
        {id: "1", name: "Tweezer App", description: "A clone of the social media app Twitter", repo: "https://github.com/RJimenezTech/tweezer", link: "https://tweezer-app.herokuapp.com/", techs: ["Node.js", "GraphQL", "ReactJS"]},
        {id: "2", name: "Habitual", description: "A habit tracking app for weekly habits", repo: "https://github.com/RJimenezTech/habit-tracker", link: "https://habitualtracker.herokuapp.com/", techs: ["Node.js", "Bulma","SQL", "Handlebars"]},
        {id: "3", name: "Occasional Movie Finder", description: "Find a movie to match your night", repo: "https://github.com/RJimenezTech/MovieFinder", link: "https://rjimeneztech.github.io/MovieFinder/", techs: ["Node.js", "Vanilla JS", "Bulma","Free APIs"]},
        {id: "4", name: "Weather Dashboard", description: "Search forecast for any city worldwide", repo: "https://github.com/RJimenezTech/tweezer", link: "https://tweezer-app.herokuapp.com/", techs: ["Node.js", "Bootstrap", "Free APIs"]},
        {id: "5", name: "Workday Schedule", description: "Interactive scheduler for a busy workday", repo: "https://rjimeneztech.github.io/workday-scheduler/", link: "https://rjimeneztech.github.io/workday-scheduler/", techs: ["Node.js", "Bootstrap", "jQuery"]},
    ]

    return (
        <section className="container mb-5">
            <h3 className="my-4">Check out some of my projects below!</h3> 
            <div className="row d-flex justify-content-center justify-content-md-start align-items-center flex-wrap mb-5">
            {projects.map((project) => (
                <div key={project.id} className="project-card col-11 col-md-6 col-lg-4">
                    <div className="project-header mt-1 mx-1 my-1">{project.name}</div>
                    <div className="project-text mx-1">{project.description}</div>
                    <div className="project-tech mx-1 my-1">
                        {project.techs.map((tech) => (
                            <li key={tech} className="mx-1">{tech}</li>
                        ))}
                    </div>
                    <div className="project-links mx-1">
                        <a className="mx-2 link-icon" href={project.link} target="_blank" rel="noreferrer noopener">
                            <i className="bi bi-box-arrow-up-right"></i>
                        </a>
                        <a className="mx-2 link-icon" href={project.repo} target='_blank' rel='noreferrer noopener'>
                            <i className="bi bi-github"></i>
                        </a> 
                    </div>
                </div>

            ))}
                

            </div>

        </section>
    )
}

export default Portfolio;