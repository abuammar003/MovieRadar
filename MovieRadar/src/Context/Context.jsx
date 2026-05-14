import { createContext, useEffect, useState } from "react";
import { fetchTrending, searchMovies, movieDetail } from "../api";

export const MovieRadarContext = createContext(null);

const Context = ({ children }) => {
  // Loading & Error Handling =>
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  //Fetching Trending Movies =>
  const [trendingMovies, setTrendingMovies] = useState(() => {
    const saved = localStorage.getItem("movieData");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("movieData", JSON.stringify(trendingMovies));
  }, [trendingMovies]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const response = await fetchTrending();
        setTrendingMovies(response.data.results);

        setError(null);

      } catch (error) {
        setError("Error in Fetching Data", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []); 



  // Fetching Search Movies =>
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(() => {
    const saved = localStorage.getItem("result");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("result", JSON.stringify(result));
  }, [result]);

  async function handleSearch(e) {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      try {
        

        const res = await searchMovies(value);
        setResult(res.data.results);

        setLoading(true);
        setError(null);

      } catch {
        setError("Error in Fetching Data.");
      } finally {
        setLoading(false);
      }
    }
  }




  // Add To Starred Movies =>
  const [starredMovies, setStarredMovies] = useState(() => {
    try {
      const saved = localStorage.getItem("starredMovies");
      return saved ? JSON.parse(saved) : [];
    } catch {
      [];
    }
  });

  useEffect(() => {
    localStorage.setItem("starredMovies", JSON.stringify(starredMovies));
  }, [starredMovies]);

  function handleStarred(movie) {
    setStarredMovies((prev) => {
      console.log("Added To Starred");

      const exist = prev.find((item) => item.id === movie.id);
      return exist
      ? prev.filter((item) => item.id !== movie.id)
      : [...prev, movie];
      
    });
  }

  

  //Movie Detail on Popup =>
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [showDetail, setShowDetail] = useState(false);

    async function handleMovieDetail(id) {

      try {
        
        const res = await movieDetail(id);
        setSelectedMovie(res.data);
        
        setShowDetail(true);

        console.log("Movie Detail")
        // console.log(selectedMovie)


      } catch (err) {
        setError("Failed to fetch movie details", err);
      } 
     
    }

function closeDetail() {
  setShowDetail(false);
}





  return (
    <MovieRadarContext.Provider
      value={{
        loading,
        error,
        trendingMovies,
        query,
        result,
        handleSearch,
        starredMovies,
        handleStarred,
        selectedMovie,
        showDetail,
        handleMovieDetail,
        closeDetail,
      }}
    >
      {children}
    </MovieRadarContext.Provider>
  );
};

export default Context;
