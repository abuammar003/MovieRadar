import { useContext } from "react";
import { MovieRadarContext } from "../../Context/Context";
import "./Details.css"

const Detail = () => {

  const { selectedMovie, closeDetail } = useContext(MovieRadarContext);
  console.log(selectedMovie)

  if(!selectedMovie) return null;

  return (
    <div className="modalOverlay">

      <h1>Movie Detail</h1>

      <div className="modal">

        <button onClick={closeDetail}> X </button>

        <img
          src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
          alt={selectedMovie.title}
        />

        <h1>{selectedMovie.title}</h1>

        <p>{selectedMovie.overview}</p>

        <h3>⭐ Rating: {selectedMovie.vote_average}</h3>

        <h3>📅 Release: {selectedMovie.release_date}</h3>

      </div>

    </div>
  );
};

export default Detail;