import { useState, useEffect } from "react";
import getCastMovie from "../services/getCastMovie";
import CastMovieList from "../Components/CastMovieList";

function CastView({ movieId }) {
  const [castMovies, setCastMovies] = useState([]);
  useEffect(() => {
    async function getFetchCostMovies() {
      try {
        const cast = await getCastMovie(movieId);
        setCastMovies(cast);
      } catch (error) {
        console.log(error);
      }
    }
    getFetchCostMovies().then();
  }, [movieId]);

  return <div>{castMovies && <CastMovieList castMovies={castMovies} />}</div>;
}

export default CastView;
