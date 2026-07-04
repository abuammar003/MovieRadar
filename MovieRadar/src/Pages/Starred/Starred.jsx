import { useContext } from 'react';
import "./Starred.css";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { MovieRadarContext } from '../../Context/Context';
import NavbarMain from "../../Components/NavbarMain/NavbarMain";


export const Starred = () => {
  const { starredMovies ,handleStarred, handleMovieDetail} = useContext(MovieRadarContext);
  console.log(starredMovies);

  return (
    <div className='strdMain'> 

        <NavbarMain />

            <h1 className= 'strConteinerHeading'> Your Starred Movies... </h1>

        {/*----- Starred Navbar -----*/}
        <div className="strdContainer">
            {starredMovies.map((movie) => {

              const isStarred = starredMovies.some((item) => item.id === movie.id);

              return (
              <div className="strdCards" key={movie.id} onClick={() => handleMovieDetail(movie.id)}>

                            {/* https://image.tmdb.org/t/p/w500=> This is the Base URL 
                                of TMDB for Images(It is Required to Access IMG)*/}
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    
                  <div className="cardDet">

                        <div className="cardInfo">
                            <h2> { movie.title } </h2>
                            <p> ⭐ Rating: { movie.vote_average.toString().slice(0, 3) } </p>
                        </div>
 
                        <div className="cardIcon">
                            <button className='strCardIcon'
                                    onClick={(e) =>{ e.stopPropagation();
                                                     handleStarred(movie) }}> 
                              { isStarred ? <FaBookmark /> : <FaRegBookmark /> }
                            </button>
                        </div>
                    
                    </div>
              </div>
            )
            })}
        </div>



    </div>
  )
}
