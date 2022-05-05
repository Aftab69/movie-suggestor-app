import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Home from "./Home";
import PopularMovies from "./PopularMovies";
import TopRatedMovies from "./TopRatedMovies";
import SearchMovies from "./SearchMovies";

function App() {
  return (
    <>
      <Navbar />
      <AnimatePresence>
        <Routes>
          <Route path="/movie-suggestor-2/" element={<Home />} />
          <Route path="/movie-suggestor-2/popularmovies" element={<PopularMovies />} />
          <Route path="/movie-suggestor-2/topratedmovies" element={<TopRatedMovies />} />
          <Route path="/movie-suggestor-2/searchmovies" element={<SearchMovies />}/>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
