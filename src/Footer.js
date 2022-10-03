import React from 'react';

const REACT_APP_VERSION = process.env.REACT_APP_VERSION;
export const Footer = () => {
    return(
        <>
        <footer>
        <div className='row'>
        <div className="col-4">
            <a href ="/"><i className="fa-brands fa-twitter"></i></a>
            &nbsp;&nbsp;
            <a href ="/"><i className="fa-brands fa-facebook-f"></i></a>
            &nbsp;&nbsp;
            <a href ="/"><i className="fa-brands fa-github"></i></a>
        </div>
            <div className="col-4">
                Copyright © 2022        <a href="https://nami-tech.es/" className="text-gray-600 hover:text-gray-900">Company - NaMi Tech</a>
            </div>
            <div className="col-4">Dreambook : v{REACT_APP_VERSION}</div>
        </div>
        </footer>
        </>
    )
}