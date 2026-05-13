import { useContext } from 'react';
import "./Browse.css"; 
// import { FaStar  } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { MovieRadarContext } from "../../Context/Context";
import NavbarMain from "../../Components/NavbarMain/NavbarMain";
import Detail from '../../Components/Details/Details';




const Browse = () => {
    const { trendingMovies, loading, error, handleStarred, 
            handleMovieDetail, showDetail } = useContext(MovieRadarContext);
    // console.log(trendingMovies)

  return ( 
    <div className='brwsMain'>

        <NavbarMain />
       

            <h1 className='brwsConteinerHeading'>Trending Movies</h1>
        {/*----- Browse Container -----*/}
        <div className="brwsContainer">

            {/* {loading && <h1>Loading...</h1>} */}

            {/* {error && <h1>{error}</h1>} */}


            {!error ? ( trendingMovies.map((movie) => (
                <div className="brwsCards" key={movie.id} onClick={() => handleMovieDetail(movie.id)} >

                            {/* https://image.tmdb.org/t/p/w500=> This is the Base URL 
                                of TMDB for Images(It is Required to Access IMG)*/}
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    
                    <div className="cardDet">

                        <div className="cardInfo">
                            <h2> { movie.title.slice(0, 20) } </h2>
                            <p> ⭐ Rating: { movie.vote_average.toString().slice(0, 3) } </p>
                        </div>

                        <div className="cardIcon">
                            <button className='strCardIcon'
                                    onClick={(e) =>{ e.stopPropagation();
                                                     handleStarred(movie) }}    
                            > <FaRegBookmark /> </button>
                        </div>
                    
                    </div>
                </div>
            ))
            ) : (
                <h1>{error}</h1>
            )
        }



        </div>

          {/* Show Movie Detail */}

            {showDetail && <Detail />}

    </div>
  )
}

export default Browse;