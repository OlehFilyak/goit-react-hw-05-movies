import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
// import MoviesView from "./views/MoviesView";
// import HomeView from "./views/HomeView";
// import NotFoundPage from "./views/NotFoundPage";
// import MovieCardView from "./views/MovieCardView";
import Spinner from "./Components/Spinner";

import "./App.css";

const HomeView = lazy(() =>
  import("./views/HomeView" /* webpackChunkName: "home-page" */)
);
const MoviesView = lazy(() =>
  import("./views/MoviesView" /* webpackChunkName: "MoviesView" */)
);
const NotFoundPage = lazy(() =>
  import("./views/NotFoundPage" /* webpackChunkName: "NotFoundPage" */)
);
const MovieCardView = lazy(() =>
  import("./views/MovieCardView" /* webpackChunkName: "MovieCardView" */)
);

function App() {
  return (
    <>
      <Header />

      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies" exact>
            <MoviesView />
          </Route>

          <Route path="/movies/:movieId">
            <MovieCardView />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
