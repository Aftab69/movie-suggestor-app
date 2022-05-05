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
          <Route path="/" element={<Home />} />
          <Route path="/popularmovies" element={<PopularMovies />} />
          <Route path="/topratedmovies" element={<TopRatedMovies />} />
          <Route path="/searchmovies" element={<SearchMovies />}/>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
