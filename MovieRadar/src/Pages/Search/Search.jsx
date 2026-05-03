import React, { useState } from 'react';
import "./Search.css";
import { FaSearch } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { searchMovies } from "../../api";


const Search = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);

  async function handleSearch(e) {
      const value = e.target.value;
      setQuery(value);

      if(value.length > 2) {
        const res = await searchMovies(value);
        setResult(res.data.results);
      }
  }

  return (
    <div>

      {/*----- Search Navbar -----*/}
        <div className="srchNav">
            <h1>Seach</h1>
            <div className="srchBar">
                <input 
                  type='search' 
                  placeholder='Search Your Movie...' 
                  value={query}
                  onChange={handleSearch}  
                  />

                {/* <button className='srchIcon'> < FaSearch /> </button> */}
            </div>
            <a href='/'>
                <button className='backHome'> <GoHomeFill /> </button>
            </a>
        </div>

        

      {/*----- Search Container -----*/}

        <div className="srchContainer">
          {/* {result.length > 0 ? */}

            {result?.map((movie) => (
              <div className="srchCards" key={movie.id}>

    {/* https://image.tmdb.org/t/p/w500=> This is the Base URL of TMDB for Images(It is Required to Access IMG)*/}
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    
                    <h2> { movie.title.slice(0, 25) } </h2>
                    <h5> Rating: {movie.vote_average} </h5>
                </div>
            ))}

         {/* : <h1>Search Your Movies</h1> */}
        {/* } */}
        </div>

    
    </div>
  )
}

export default Search