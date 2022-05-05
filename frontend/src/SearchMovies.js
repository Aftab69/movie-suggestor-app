import React from 'react';
import { useState } from 'react';
import "./SearchMovies.css";
import Movie from './Movie';
import { motion } from 'framer-motion';

const SearchMovies = () => {
  const [title, setTitle] = useState("");
  const [movie,setMovie] = useState([]);
  const handleChange = (e) =>{
     setTitle(e.target.value);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`)
    .then((res)=>res.json()).then((data)=>{
      const newData = data.results.filter(eachMovie =>
        eachMovie.poster_path !== null);
      setMovie(newData);
    })
  }

  return (
    <>
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{delay:0.1}}>
    <div className='searchpage_Container'>
        <div className='searchpage_Elements'>
            <form onSubmit={handleSubmit}>
              <div className='label_Input'>
                <label><h2>Search Movies:</h2></label>
                <input type="text" value={title} onChange={handleChange} />
              </div>
              <button type="submit">Search</button>
            </form>
        </div>
        
    </div>
    <div className='results_Container'>
      {movie.map((individualMovieData)=>(
            <Movie {...individualMovieData} key={individualMovieData.id}/>  
      ))}
    </div>
    </motion.div>
    
    </>
  )
}

export default SearchMovies;