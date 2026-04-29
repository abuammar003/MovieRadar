import React from 'react';
import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram  } from "react-icons/fa";

const Footer = () => {

  return (
    <div className="footer">

        <h1><span>M</span>OVIE<span>R</span>ADAR</h1>
        <p>MovieRadar helps you discover and explore detailed information about movies, <br /> including ratings, release dates, cast, and story summaries — all in one place.</p>
       
        <div className='footerContact'>
            <h3>© 2026 MovieRadar. All rights reserved.</h3>
            <p>Built By Ammar Shah</p>

            <div className="ftrContIcons">
                <a href="/"> < FaGithub /> </a>
                
                <a href='https://www.linkedin.com/in/ammar-shah-252448284/'> < FaLinkedin /> </a> 
                <a href='https://www.instagram.com/ammarshah_03/'> < FaInstagram  /> </a>
            </div>
        </div>


      </div>
  )
}

export default Footer;