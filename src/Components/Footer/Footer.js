import React from 'react';
import './Footer.css';

const Footer = () => {
   const date = new Date().getFullYear();
   return (
      <footer className="footer">
         <div className="container">
            <div className="row">
               {/* <nav className="footer-nav">
                  <ul>
                     <li><a href="https://www.creative-tim.com">Creative Tim</a></li>
                     <li><a href="https://blog.creative-tim.com">Blog</a></li>
                     <li><a href="https://www.creative-tim.com/license">Licenses</a></li>
                  </ul>
               </nav> */}
               <div className="credits ml-auto">
                  <span className="copyright" >
                     © {date} Template made with <i className="fa fa-heart heart"></i> by <a href="https://www.creative-tim.com"> Creative Tim </a>
                  </span>
               </div>
            </div>
         </div>
      </footer>
   );
}

export default Footer;