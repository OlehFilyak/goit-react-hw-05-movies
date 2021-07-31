import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  useParams,
  NavLink,
  useRouteMatch,
  Route,
  useHistory,
} from "react-router-dom";

import getMovieById from "../../services/getMovieById";
import { IMAGE_URL } from "../../services/contactsGetMoviesAPI";
// import CastView from "../../views/CastView";
// import ReviewsView from "../../views/ReviewsView";
import BtnBack from "../BtnBack";
import Spinner from "../Spinner";
import DefaultImgForMovie from "../DefaultImages/movieImg.png";

import css from "./MovieCard.module.css";

const CastView = lazy(() =>
  import("../../views/CastView" /* webpackChunkName: "CastView" */)
);
const ReviewsView = lazy(() =>
  import("../../views/ReviewsView" /* webpackChunkName: "ReviewsView" */)
);

function MovieCard() {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();

  const [movie, setMovie] = useState([]);

  let history = useHistory();

  useEffect(() => {
    async function getFetchMovies() {
      try {
        const movie = await getMovieById(movieId);
        setMovie(movie);
      } catch (error) {
        console.log(error);
      }
    }
    getFetchMovies();
  }, [movieId]);

  const { title, poster_path, overview, genres, vote_average } = movie;

  return (
    <>
      <BtnBack onClick={() => history.goBack()} />
      {movie.length !== 0 && (
        <div className={css.WrapperMovie}>
          {
            <img
              src={
                poster_path ? `${IMAGE_URL}${poster_path}` : DefaultImgForMovie
              }
              alt={title}
            />
          }

          <div className={css.WrapperInfo}>
            <h2>{title}</h2>
            <p>User score: {vote_average * 10}% </p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h4>Genres</h4>
            <p>{`${genres.map((genre) => genre.name).join(" ")}`}</p>
          </div>
        </div>
      )}
      <hr />

      <NavLink to={`${url}/cast`} className={css.Cast}>
        Cast
      </NavLink>
      <NavLink to={`${url}/reviews`}>Reviews</NavLink>
      <hr />

      <Suspense fallback={<Spinner />}>
        <Route path={`${path}/cast`}>
          <CastView movieId={movieId} />
        </Route>

        <Route path={`${path}/reviews`}>
          <ReviewsView movieId={movieId} />
        </Route>
      </Suspense>
    </>
  );
}

export default MovieCard;
