import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Banner from "./components/banner/Banner";
import Main from "./components/layouts/Main";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route
            index
            element={
              <>
                <Banner />
                <HomePage />
              </>
            }
          />
          <Route
            path="home"
            element={
              <>
                <Banner />
                <HomePage />
              </>
            }
          />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
