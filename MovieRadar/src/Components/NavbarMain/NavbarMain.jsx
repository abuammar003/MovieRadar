import React from 'react';
import "./NavbarMain.css";
import { Link } from 'react-router-dom';
import { GoHomeFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { RiArrowGoBackLine } from "react-icons/ri";

const NavbarMain = () => {


  return (
    <div className="navMain">
            <div className="navLogo">
                <h1><span>M</span>OVIE<span>R</span>ADAR</h1>
            </div>


            <div className="navMainIcons">
                <Link to='/Browse'>
                    <button className='navIcon'> <GoHomeFill /> </button>
                </Link>
                <Link to='/Search'>
                    <button className='navIcon'> <FaSearch /> </button>
                </Link>
                <Link to='/Starred'>
                    <button className='navIcon'> <FaRegBookmark /> </button>
                </Link>
                <Link to='/'>
                    <button className='navIcon'> <RiArrowGoBackLine /> </button>
                </Link>
            </div> 


        </div>
  )
}

export default NavbarMain