import React from 'react';
import "./Starred.css";
import { GoHomeFill } from "react-icons/go";

export const Starred = () => {

  return (
    <div className='strdMain'>

        {/*----- Starred Navbar -----*/}
        <div className="strdNav">
            <h1> Starred Movies </h1>
            <a href='/'>
               <button className='backHome'> < GoHomeFill />  </button>
            </a>
        </div>


        {/*----- Starred Navbar -----*/}
        <div className="strdContainer">
            <h1> Your Starred Movies... </h1>
        </div>



    </div>
  )
}
