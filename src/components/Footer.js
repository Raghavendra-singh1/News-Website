import "./FooterStyle.css";
import React from "react";

const Footer=()=>{
 return(
    <div className="footer">

        <div className="top">
           <div>
            <h1>SquareBoat News</h1>
            <p>Read your favourate News.</p>
            </div> 
            <div className="icon">
            <a href="https://www.instagram.com/">
                <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/">
                <i className="fa-brands fa-instagram-square"></i>
            </a>
            <a href="https://www.instagram.com/">
                <i className="fa-brands fa-behance-square"></i>
            </a>
            <a href="https://www.instagram.com/">
                <i className="fa-brands fa-twitter-square"></i>
            </a>
            </div>
        </div>
        
        <div className="bottom">
            <div>
                <h4>PROJECT</h4>
                <a href="/">ChangeLog</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">AllVersions</a>
            </div>
            <div>
                <h4>LEGAL</h4>
                <a href="/">Copyright</a>
                <a href="/">Privacy</a>
                <a href="/">Accessibility</a>
                <a href="/">Terms and conditions</a>
            </div>
            <div>
                <h4>RESOURCES</h4>
                <a href="/">Application</a>
                <a href="/">Documentation</a>
                <a href="/">Systems</a>
                <a href="/">FAQ</a>
            </div>
            <div>
                <h4>COMPANY</h4>
                <a href="/">About Us</a>
                <a href="/">Careers</a>
                <a href="/">Newsroom</a>
                <a href="/">Contact Us</a>
            </div>
        </div>
    </div>
 )
}

export default Footer;