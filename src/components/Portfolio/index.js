import React from 'react';
import habit from '../../assets/images/projects/habitual-tracker.png';
import tweezer from "../../assets/images/projects/tweezer-app.png";
import occasional from '../../assets/images/projects/occasional-movie.png';
import weather from '../../assets/images/projects/weather-dashboard.png';
import schedule from '../../assets/images/projects/workday-scheduler.png';

function Portfolio() {
    return (
        <section className="container mb-5">
            <h3 className="my-4">Check out some of my projects below!</h3> 
            <div className="row d-flex justify-content-center justify-content-md-start align-items-center flex-wrap mb-5">
                <a className="project-card col-8 col-md-6 col-lg-4 text-decoration-none text-body" 
                href="https://tweezer-app.herokuapp.com/" target='_blank' rel='noreferrer noopener'>
                    <p className="project-header p-1 mb-0">Tweezer App - Twitter Clone</p>
                    <img className="p-2 project-img mb-2" src={tweezer} alt="twitter clone"></img>
                </a>
                <a className="project-card col-8 col-md-6 col-lg-4 text-decoration-none text-body" 
                href="https://habitualtracker.herokuapp.com/" target='_blank' rel='noreferrer noopener'>
                    <p className="project-header p-1 mb-0">Habitual - Habit Tracker</p>
                    <img className="p-2 project-img mb-2" src={habit} alt="habit tracker"></img>
                </a>
                <a className="project-card col-8 col-md-6 col-lg-4 text-decoration-none text-body" 
                href="https://rjimeneztech.github.io/MovieFinder/" target='_blank' rel='noreferrer noopener'>
                    <p className="project-header p-1 mb-0">Occasional Movie - Movie Finder</p>
                    <img className="p-2 project-img mb-2" src={occasional} alt="movie finder"></img>
                </a>
                <a className="project-card col-8 col-md-6 col-lg-4 text-decoration-none text-body" 
                href="https://rjimeneztech.github.io/weather-dashboard/" target='_blank' rel='noreferrer noopener'>
                    <p className="project-header p-1 mb-0">Weather Dashboard - Forecaster</p>
                    <img className="p-2 project-img mb-2" src={weather} alt="weather app"></img>
                </a>
                <a className="project-card col-8 col-md-6 col-lg-4 text-decoration-none text-body" 
                href="https://rjimeneztech.github.io/workday-scheduler/" target='_blank' rel='noreferrer noopener'>
                    <p className="project-header p-1 mb-0">Workday Schedule - Daily Agenda</p>
                    <img className="p-2 project-img mb-2" src={schedule} alt="daily agenda"></img>
                </a>   
            </div>

        </section>
    )
}

export default Portfolio;