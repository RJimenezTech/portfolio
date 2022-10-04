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
                <div className="project-card col-8 col-md-6 col-lg-4 text-decoration-none text-body">
                    <p className="project-header p-1 mb-0">Tweezer App - Twitter Clone</p>
                    <a href="https://tweezer-app.herokuapp.com/" target='_blank' rel='noreferrer noopener'>
                        <img className="project-img" src={tweezer} alt="twitter clone"></img>
                    </a>
                    <div className="project-footer">
                        <a href="https://github.com/RJimenezTech/tweezer" target='_blank' rel='noreferrer noopener' 
                        className="project-footer-txt p-1 mb-0 text-decoration-none">
                        GitHub Repo
                        </a> 
                    </div>
                </div>
                

                <div className="project-card col-8 col-md-6 col-lg-4 text-decoration-none text-body">
                    <p className="project-header p-1 mb-0">Habitual - Habit Tracker</p>
                    <a href="https://habitualtracker.herokuapp.com/" target='_blank' rel='noreferrer noopener'>
                        <img className="project-img" src={habit} alt="habit tracker"></img>
                    </a>
                    <div className="project-footer">
                        <a href="https://github.com/RJimenezTech/habit-tracker" target='_blank' rel='noreferrer noopener' 
                        className="project-footer-txt p-1 mb-0 text-decoration-none">
                        GitHub Repo
                        </a> 
                    </div>
                </div>

                <div className="project-card col-8 col-md-6 col-lg-4 text-decoration-none text-body">
                    <p className="project-header p-1 mb-0">Occasional Movie - Movie Finder</p>
                    <a href="https://rjimeneztech.github.io/MovieFinder/" target='_blank' rel='noreferrer noopener'>
                        <img className="project-img" src={occasional} alt="habit tracker"></img>
                    </a>
                    <div className="project-footer">
                        <a href="https://github.com/RJimenezTech/MovieFinder" target='_blank' rel='noreferrer noopener' 
                        className="project-footer-txt p-1 mb-0 text-decoration-none">
                        GitHub Repo
                        </a> 
                    </div>
                </div>
                <div className="project-card col-8 col-md-6 col-lg-4 text-decoration-none text-body">
                    <p className="project-header p-1 mb-0">Weather Dashboard - Weekly Forecaster</p>
                    <a href="https://rjimeneztech.github.io/weather-dashboard/" target='_blank' rel='noreferrer noopener'>
                        <img className="project-img" src={weather} alt="habit tracker"></img>
                    </a>
                    <div className="project-footer">
                        <a href="https://github.com/RJimenezTech/weather-dashboard" target='_blank' rel='noreferrer noopener' 
                        className="project-footer-txt p-1 mb-0 text-decoration-none">
                        GitHub Repo
                        </a> 
                    </div>
                </div>

                <div className="project-card col-8 col-md-6 col-lg-4 text-decoration-none text-body">
                    <p className="project-header p-1 mb-0">Workday Schedule - Daily Agenda</p>
                    <a href="https://rjimeneztech.github.io/workday-scheduler/" target='_blank' rel='noreferrer noopener'>
                        <img className="project-img" src={schedule} alt="habit tracker"></img>
                    </a>
                    <div className="project-footer">
                        <a href="https://github.com/RJimenezTech/workday-scheduler" target='_blank' rel='noreferrer noopener' 
                        className="project-footer-txt p-1 mb-0 text-decoration-none">
                        GitHub Repo
                        </a> 
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Portfolio;