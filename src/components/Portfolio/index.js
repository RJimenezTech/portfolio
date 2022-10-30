import React from 'react';
import habit from '../../assets/images/projects/habitual-tracker.png';
import tweezer from "../../assets/images/projects/tweezer-app.png";
import occasional from '../../assets/images/projects/occasional-movie.png';
import weather from '../../assets/images/projects/weather-dashboard.png';
import schedule from '../../assets/images/projects/workday-scheduler.png';
import Preview from '../Preview';

function Portfolio() {
    const projects = [
        {id: "1", name: "Tweezer App", description: "A clone of the social media app Twitter", repo: "https://github.com/RJimenezTech/tweezer", link: "https://tweezer-app.herokuapp.com/", techs: ["Node.js", "GraphQL", "ReactJS"], image: tweezer},
        {id: "2", name: "Habitual", description: "A habit tracking app for weekly habits", repo: "https://github.com/RJimenezTech/habit-tracker", link: "https://habitualtracker.herokuapp.com/", techs: ["Node.js", "Bulma","SQL", "Handlebars"], image: habit},
        {id: "3", name: "Occasional Movie Finder", description: "Find a movie to match your night", repo: "https://github.com/RJimenezTech/MovieFinder", link: "https://rjimeneztech.github.io/MovieFinder/", techs: ["Node.js", "Vanilla JS", "Bulma","Free APIs"], image: occasional},
        {id: "4", name: "Weather Dashboard", description: "Search forecast for any city worldwide", repo: "https://github.com/RJimenezTech/weather-dashboard", link: "https://rjimeneztech.github.io/weather-dashboard/", techs: ["Node.js", "Bootstrap", "Free APIs"], image: weather},
        {id: "5", name: "Workday Schedule", description: "Interactive scheduler for a busy workday", repo: "https://rjimeneztech.github.io/workday-scheduler/", link: "https://rjimeneztech.github.io/workday-scheduler/", techs: ["Node.js", "Bootstrap", "jQuery"], image: schedule},
    ]

    return (
        <section className="container mb-5">
            <h3 className="my-4">Check out some of my projects below!</h3> 
            <div className="row d-flex justify-content-center justify-content-md-start align-items-center flex-wrap mb-5">
            {projects.map((project) => (
                <div key={project.id} className="project-card col-11 col-md-6 col-lg-4 mb-2 p-2">
                    <div className="project-header mt-1 mx-1 my-1">{project.name}</div>
                    <div className="project-text mx-1">{project.description}</div>
                    <div className="project-tech mx-1 my-1">
                        {project.techs.map((tech) => (
                            <li key={tech} className="me-2">{tech}</li>
                        ))}
                    </div>
                    <div className="project-links mx-1 mt-1">
                            <Preview 
                            name={project.name} 
                            description={project.description} 
                            image={project.image}>
                            </Preview>
                        <a className="mx-2 link-icon" href={project.link} target="_blank" rel="noreferrer noopener">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="var(--tertiary)" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                            <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                            </svg>
                        </a>
                        <a className="mx-2 link-icon" href={project.repo} target='_blank' rel='noreferrer noopener'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="var(--tertiary)" className="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </a> 
                    </div>
                </div>
            ))}
                
            <div className="add-footer-cushion"></div>
            </div>

        </section>
    )
}

export default Portfolio;