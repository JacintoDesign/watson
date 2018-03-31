import React from 'react';
import './Navbar.css';

const Navbar = () => {
   return (
      <nav className="navbar navbar-expand-md fixed-top navbar-transparent" color-on-scroll="500">
         <div className="container">
            <div className="navbar-translate">
               <button
                  className="navbar-toggler navbar-toggler-right navbar-burger"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarToggler"
                  aria-controls="navbarTogglerDemo02"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className="navbar-toggler-bar"></span>
                  <span className="navbar-toggler-bar"></span>
                  <span className="navbar-toggler-bar"></span>
               </button>
               <a className="navbar-brand sw-logo" href="http://jacinto.design">Jacinto Design</a>
            </div>
            <div className="collapse navbar-collapse" id="navbarToggler">
               <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                     <a className="nav-link" rel="tooltip" title="View my profile on Linkedin" data-placement="bottom" href="https://www.linkedin.com/in/jacintowong/">
                        <i className="fa fa-linkedin"></i>
                        <p className="d-lg-none">Linkedin</p>
                     </a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" rel="tooltip" title="Visit my Codepen" data-placement="bottom" href="https://codepen.io/jacintodesign/">
                        <i className="fa fa-codepen"></i>
                        <p className="d-lg-none">Codepen</p>
                     </a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" rel="tooltip" title="Check out my GitHub" data-placement="bottom" href="https://github.com/JacintoDesign">
                        <i className="fa fa-github"></i>
                        <p className="d-lg-none">GitHub</p>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;