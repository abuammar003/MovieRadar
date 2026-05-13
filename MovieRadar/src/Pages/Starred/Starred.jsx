import { useContext } from 'react';
import "./Starred.css";
import { FaRegBookmark } from "react-icons/fa";
import { MovieRadarContext } from '../../Context/Context';
import NavbarMain from "../../Components/NavbarMain/NavbarMain";


export const Starred = () => {
  const { starredMovies ,handleStarred} = useContext(MovieRadarContext);
  console.log(starredMovies);

  return (
    <div className='strdMain'> 

        <NavbarMain />


        {/*----- Starred Navbar -----*/}
        <div className="strdContainer">
            <h1> Your Starred Movies... </h1>
            {starredMovies.map((movie) => (
              <div className="strdCards" key={movie.id}>

                  <FaRegBookmark className='strdIcon'onClick={handleStarred(movie.id)}/> 

                            {/* https://image.tmdb.org/t/p/w500=> This is the Base URL 
                                of TMDB for Images(It is Required to Access IMG)*/}
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    
                  <h2> { movie.title } </h2>
                  <p> Rating: {movie.vote_average} </p>
              </div>
            ))}
        </div>



    </div>
  )
}
