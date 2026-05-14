import { useContext } from 'react';
import "./Search.css";
import { FaRegBookmark } from "react-icons/fa";
// import { searchMovies } from "../../api";
import { MovieRadarContext } from '../../Context/Context';
import NavbarMain from "../../Components/NavbarMain/NavbarMain";
import Detail from '../../Components/Details/Details';


const Search = () => {
    const { query, result, handleSearch, loading, error, handleStarred, 
            handleMovieDetail, showDetail } = useContext(MovieRadarContext);
   

  return (
    <div className='srchMain'>

      <NavbarMain />

      {/*----- Search Navbar -----*/}
        <div className="srchNav">

            <div className="srchBar">
                <input 
                  type='text' 
                  placeholder='Search Your Movie, TV Shows...' 
                  value={query}
                  onChange={handleSearch}  
                />
            </div>

        </div>

        

      {/*----- Search Container -----*/}

        <div className="srchContainer">

          {/* {loading ?  <h1 className='msgContent'> Loading... </h1>  : ""} */}

          {!loading && !error && result.length < 2 && <h1>Search Your Movies...</h1> }


          {error && <h1 className='msgContent'> {error} </h1>}

 
          {!loading && !error && result.length > 0 && (result.map((movie) => (
              <div className="srchCards" key={movie.id} onClick={() => handleMovieDetail(movie.id)} >
                
                            {/* https://image.tmdb.org/t/p/w500=> This is the Base URL 
                                  of TMDB for Images(It is Required to Access IMG)*/}
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    
                      <div className="cardDet">  
                    
                        <div className="cardInfo">
                            <h2> { movie.title.slice(0, 20) } </h2>
                            <p> Rating: { movie.vote_average.toString().slice(0, 3) } </p>
                        </div>
                    
                        <div className="cardIcon">
                            <button className='strCardIcon'  onClick={(e) => {e.stopPropagation;
                                                            handleStarred(movie) }}> 
                                  <FaRegBookmark /> 
                            </button>
                        </div>
                                        
                      </div>
                </div>
            )))  
          } 

        </div>


          {/* Show Movie Detail */}
          {showDetail && <Detail /> }  
           

    </div>
  )
}

export default Search