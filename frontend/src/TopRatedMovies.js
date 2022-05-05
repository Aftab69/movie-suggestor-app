import React from 'react';
import { useState, useEffect } from 'react';
import Movie from "./Movie";
import "./TopRatedMovies.css";
import { motion } from 'framer-motion';

const TopRatedMovies = () => {

  const [movies, setMovies] = useState([]);
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    .then((res)=>res.json()).then((data)=>{
        setMovies(data.results);
    })
  },[])

  return (
      <>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{delay:0.1}}>
      <div className='topRatedMoviesPageContainer'>
        {movies.map((individualMovieData)=>(
            <Movie {...individualMovieData} key={individualMovieData.id} />
        ))}
      </div>
      </motion.div>
      </>
    
  )
}

export default TopRatedMovies