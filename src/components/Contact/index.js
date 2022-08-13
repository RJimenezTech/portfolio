import React from 'react';

function Contact() {
    return (
        <section className="d-flex flex-wrap justify-content-center align-items-center text-decoration-none mb-5">
            
            <div className="w-75 w-lg-50 mt-5">
                <h4>Find me all over the web:</h4>
                <button type="button" className="btn btn-light w-100 border border-dark m-2">
                    <a className="text-decoration-none text-dark contact-button" href="mailto:rjimeneztech@gmail.com" target="_blank" rel='noreferrer noopener'>
                    <i className="bi bi-envelope-fill"></i> rjimeneztech@gmail.com  
                    </a>
                </button>
                <button type="button" className="btn btn-light w-100 border border-dark m-2">
                    <a className="text-decoration-none text-dark contact-button" href="https://www.linkedin.com/in/rjimeneztech/" target="_blank" rel='noreferrer noopener'>
                    <i className="bi bi-linkedin"></i> LinkedIn: Robert Jimenez
                    </a>
                </button>
                <button type="button" className="btn btn-light w-100 border border-dark m-2">
                    <a className="text-decoration-none text-dark contact-button" href="https://github.com/RJimenezTech" target="_blank" rel='noreferrer noopener'>
                    <i className="bi bi-github"></i> Github: rjimeneztech
                    </a>
                </button>
                <button type="button" className="btn btn-light w-100 border border-dark m-2">
                    <a className="text-decoration-none text-dark contact-button" href="https://twitter.com/rjimeneztech" target="_blank" rel='noreferrer noopener'>
                    <i className="bi bi-twitter"></i> @RJimenezTech
                    </a>
                </button>
                <button type="button" className="btn btn-light w-100 border border-dark m-2">
                    <a className="text-decoration-none text-dark contact-button" href="https://www.youtube.com/channel/UCiQPaVt0qpyvZSY_JWW4d0A" target="_blank" rel='noreferrer noopener'>
                    <i className="bi bi-youtube"></i> YouTube: RJimenezTech
                    </a>
                </button>
            </div>
        </section>
        
    )
}

export default Contact;