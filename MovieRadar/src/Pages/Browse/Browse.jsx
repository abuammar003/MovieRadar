import React, { useContext } from 'react';
import "./Browse.css";
import { GoHomeFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { MovieRadarContext } from "../../Context/Context";


const Browse = () => {
    const { movieData } = useContext(MovieRadarContext);
    console.log(movieData)

  return (
    <div>

        {/*----- Browse Navbar -----*/}
        <div className="brwsNav">
            <h1> Browse </h1>

            <div className="brwsNavIcons">
                <a href='/Search'>
                    <button className='brwsNavIcon1'> <FaSearch /> </button>
                </a>
                <a href='/'>
                    <button className='brwsNavIcon2'> <GoHomeFill /> </button>
                </a>
            </div> 

        </div>


        {/*----- Browse Container -----*/}
            <h1 className='brwsConteinerHeading'>Trending Movies</h1>
        <div className="brwsContainer">

            {movieData?.map((movie) => (
                <div className="brwsCards" key={movie.id}>

    {/* https://image.tmdb.org/t/p/w500=> This is the Base URL of TMDB for Images(It is Required to Access IMG)*/}
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    
                    <h2> { movie.title } </h2>
                    <h5> Rating: {movie.vote_average} </h5>
                </div>
            ))}

        </div>


    </div>
  )
}

export default Browse;