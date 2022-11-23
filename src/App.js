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
              Watch <i class="fa-solid fa-circle-play" />
            </button>
          </div>
        </div>
      </section>

      <section className="movies-layout page-container text-white mb-10">
        <div className="movie-heading flex justify-between mb-5">
          <h2 className="text-2xl font-bold">Now Playing</h2>
          <div className="angle-container">
            <i class="fa-solid fa-angle-left w-[30px] h-[30px] text-center leading-[30px] text-lg rounded-full bg-slate-800 cursor-pointer mr-2"></i>
            <i class="fa-solid fa-angle-right w-[30px] h-[30px] text-center leading-[30px] text-lg rounded-full bg-slate-800 cursor-pointer"></i>
          </div>
        </div>

        <div className="movies-list grid grid-cols-4 gap-4 text-white">
          <div className="movie-card rounded-lg p-3 bg-slate-800">
            <div className="w-full h-[250px] overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg"
                alt=""
                className=" object-cover w-full h-full rounded-lg hover:scale-110 transition-all duration-300"
              />
            </div>
            <h3 className=" text-lg font-bold mt-3 mb-1">
              Spiderman: Homecoming
            </h3>
            <div className="flex items-center justify-between mb-6 text-sm opacity-50">
              <p>2017</p>
              <p>
                7.4<i class="fa-solid fa-star text-yellow-400 ml-2"></i>
              </p>
            </div>
            <button className="bg-primary py-2 px-8 rounded-lg font-bold text-md w-full">
              Watch <i class="fa-solid fa-circle-play" />
            </button>
          </div>
        </div>
      </section>

      <section className="movies-layout page-container text-white mb-10">
        <div className="movie-heading flex justify-between mb-5">
          <h2 className="text-2xl font-bold">Top rated</h2>
          <div className="angle-container">
            <i class="fa-solid fa-angle-left w-[30px] h-[30px] text-center leading-[30px] text-lg rounded-full bg-slate-800 cursor-pointer mr-2"></i>
            <i class="fa-solid fa-angle-right w-[30px] h-[30px] text-center leading-[30px] text-lg rounded-full bg-slate-800 cursor-pointer"></i>
          </div>
        </div>

        <div className="movies-list grid grid-cols-4 gap-4 text-white">
          <div className="movie-card rounded-lg p-3 bg-slate-800">
            <div className="w-full h-[250px] overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg"
                alt=""
                className=" object-cover w-full h-full rounded-lg hover:scale-110 transition-all duration-300"
              />
            </div>
            <h3 className=" text-lg font-bold mt-3 mb-1">
              Spiderman: Homecoming
            </h3>
            <div className="flex items-center justify-between mb-6 text-sm opacity-50">
              <p>2017</p>
              <p>
                7.4<i class="fa-solid fa-star text-yellow-400 ml-2"></i>
              </p>
            </div>
            <button className="bg-primary py-2 px-8 rounded-lg font-bold text-md w-full">
              Watch <i class="fa-solid fa-circle-play" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
