import React from 'react';

function Footer () {
    const year = () => {
        let currentTime = new Date();
        return currentTime.getFullYear();
    }

    return (
        <footer>
            <div className="row my-2 center-icons">
                <div className="row col-12 my-2">
                    <h2 className="col-3">
                        <a href="mailTo:rjimeneztech@gmail.com">
                            <i className="bi bi-envelope-fill"></i>
                        </a>
                    </h2>
                    <h2 className="col-3">
                        <a href="https://www.linkedin.com/in/rjimeneztech/" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </h2>
                    <h2 className="col-3">
                        <a href="https://github.com/RJimenezTech" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-github"></i>    
                        </a>
                        
                    </h2>
                    <h2 className="col-3">
                        <a href="https://www.youtube.com/channel/UCiQPaVt0qpyvZSY_JWW4d0A" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-youtube"></i>
                        </a>
                    </h2>
                </div> 
                <div className="col-12 my-1">&copy; Robert Jimenez {year()}</div> 
            </div>
        </footer>
    )
}

export default Footer;