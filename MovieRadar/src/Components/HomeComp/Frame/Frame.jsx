import React from 'react';
// import {Link} from 'react-router-dom';
import "./Frame.css";
import { FaSearch, FaStar  } from "react-icons/fa";
// import { GoHomeFill } from "react-icons/go";


const Frame = () => {

  return (
    <div className='frameContainer'>
        <div className="navFrame">
        <div className="navLogoFrame">
          <h1><span>M</span>OVIE<span>R</span>ADAR</h1>
        </div>

        <div className="navLinkFrame">   
          <ul>
            {/* <li className='navIcon'> < GoHomeFill /> </li> */}
            <a href='/Starred'>
              <li className='navIcon'> <FaStar /> </li>
            </a>
            <a href='/Search'>
              <li className='navIcon'> <FaSearch /> </li>
            </a>
          </ul>
        </div>
      </div>



        {/*------ Frame Info ------*/}
      <div className="infoFrame">
        <div className="paraInfoFrame">
          <h1>Your Ultimate Movie <br /> Information Hub</h1>
          <h3>Find complete details about any movie instantly <br />
              Including ratings, release year, and cast <br />
              All in one simple and fast platform.</h3>
          <p>Make better choices with <span>MovieRadar</span>.</p>
          <div className="cntInfoFrame">
            <a href='/Search'>
              <input type="text" placeholder="Search for Movie..." className="searchInput" />
            </a>
         
              <a href="/Browse">
                <button className="btn">Browse Movies</button>
              </a>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frame