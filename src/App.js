import MovieCard from "./components/movie/MovieCard";
import MovieList from "./components/movie/MovieList";

function App() {
  return (
    <>
      <header className="header flex item-center justify-center gap-x-5 py-2 mb-10 text-white">
        <span className="text-primary cursor-pointer">Home</span>
        <span className="cursor-pointer">Movies</span>
      </header>

      <section className="banner h-[400px] bg-white page-container rounded-lg mb-10">
        <div className="w-full h-full rounded-lg bg-white relative">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,1)] to-transparent"></div>
          <img
            src="https://cdnimg.vietnamplus.vn/uploaded/zatmzy/2019_06_12/avengersendgame2904.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute left-5 top-1/2 text-white">
            <h2 className="font-bold text-3xl mb-5">Avengers: Endgame</h2>
            <div className="flex items-center gap-x-5 mb-8">
              <span className="border-2 border-white py-1 px-3 rounded-lg">
                Action
              </span>
              <span className="border-2 border-white py-1 px-3 rounded-lg">
                Adventure
              </span>
              <span className="border-2 border-white py-1 px-3 rounded-lg">
                Drama
              </span>
            </div>
            <button className="bg-primary py-2 px-8 rounded-lg font-bold text-sm">
              Watch <i className="fa-solid fa-circle-play" />
            </button>
          </div>
        </div>
      </section>

      <MovieList title={"Top View"} />

      <MovieList title={"Top rated"} />
    </>
  );
}

export default App;
