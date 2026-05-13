import React from 'react';
import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram  } from "react-icons/fa";

const Footer = () => {

  return (
    <div className="footer">

        <h1><span>M</span>OVIE<span>R</span>ADAR</h1>
        <p>MovieRadar helps you discover and explore detailed information about movies, including ratings, release dates, cast, and story summaries — all in one place.</p>
       
        <div className='footerContact'>
          <div className="ftrCntInfo">
            <h3>© 2026 MovieRadar. All rights reserved.</h3>
            <p>Built By Ammar Shah</p>
          </div>

            <div className="ftrContIcons">
                <a href="https://github.com/abuammar003/MovieRadar"> < FaGithub /> </a>
                
                <a href='https://www.linkedin.com/in/abu-ammar-252448284/'> < FaLinkedin /> </a> 
                <a href='https://www.instagram.com/abuammar_03/'> < FaInstagram  /> </a>
            </div>
        </div>


      </div>
  )
}

export default Footer;