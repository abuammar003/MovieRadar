import React from 'react';
import "./NavbarMain.css";
import { Link } from 'react-router-dom';
import { GoHomeFill } from "react-icons/go";
import { RiArrowGoBackLine } from "react-icons/ri";
import { IoSearch, IoBookmark } from "react-icons/io5";
import LogoImage from "../../assets/MovieRadar-Logo.png";

const NavbarMain = () => {

 
  return (
    <header className="navMain">
            <div className="navLogo">
                {/* <h1><span>M</span>OVIE<span>R</span>ADAR</h1> */}

                <img src={LogoImage} alt='' />
            </div>


            <nav className="navMainIcons">
                <Link to='/Browse'>
                    <button className='navIcon'> <GoHomeFill /> </button>
                </Link>
                <Link to='/Search'>
                    <button className='navIcon'> <IoSearch /> </button>
                </Link>
                <Link to='/Starred'>
                    <button className='navIcon'> <IoBookmark /> </button>
                </Link>
                <Link to='/'>
                    <button className='navIcon'> <RiArrowGoBackLine /> </button>
                </Link>
            </nav> 


        </header>
  )
}

export default NavbarMain