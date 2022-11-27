import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Banner from "./components/banner/Banner";
import Main from "./components/layouts/Main";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MoviePageV2 from "./pages/MoviePageV2";
import MoviePage from "./pages/MoviePage";
import FileNotFound from "./pages/FileNotFound";

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
          <Route path="/moviesV2" element={<MoviePageV2 />} />
          <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
          <Route path="*" element={<FileNotFound />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
