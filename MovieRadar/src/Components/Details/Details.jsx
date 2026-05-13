import { useContext } from "react";
import { MovieRadarContext } from "../../Context/Context";
import "./Details.css"

const Detail = () => {

  const { selectedMovie, closeDetail } = useContext(MovieRadarContext);
  console.log(selectedMovie)

  if(!selectedMovie) return null;

  return (
    <div className="dtlMain">


      <div className="dtlContainer">
        <h1 className="dtlHeading">Movie Detail</h1>

        <button onClick={closeDetail}> X </button>


        <div className="dtlImg">
          <img src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
               alt={selectedMovie.title} />
        </div>

        <div className="dtlText">
          <h1>{selectedMovie.title}</h1>
          <p>{selectedMovie.overview}</p>
          <h3> Revenue:  <span> ${selectedMovie.revenue}/- </span> </h3>
          <h3>⭐ Rating: { selectedMovie.vote_average.toString().slice(0, 3) }</h3>
          <h3>📅 Release: {selectedMovie.release_date}</h3>
        </div>

      </div>

    </div>
  );
};

export default Detail;