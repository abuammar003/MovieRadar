import React, { createContext, useEffect, useState } from 'react';
import { fetchTrending } from "../api";

export const MovieRadarContext = createContext(null);

const Context = ({children}) => {
    const [movieData, setMovieData] = useState(() => {
            const saved = localStorage.getItem('movieData');
            return saved ? JSON.parse(saved) :[]
    });

    useEffect(() => {
        localStorage.setItem('movieData', JSON.stringify(movieData));
    }, [movieData]);


    useEffect (() => {
        async function fetchData() {
                // const response = await axios.get('https://www.omdbapi.com/?apikey=a2526df0');

                const response = await fetchTrending();
                console.log(response.data.results)
                setMovieData(response.data.results);
        }

        fetchData();
    }, []);


  return (
 
        <MovieRadarContext.Provider
            value={{
                movieData, 
                setMovieData
            }}
        >
            {children}
        </MovieRadarContext.Provider>
        
  
  )
}

export default Context;