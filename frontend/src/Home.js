import React from 'react';
import { useState } from 'react';
import "./Home.css";
import { motion } from 'framer-motion';

const Home = () => {
  const[movie, setMovie] = useState({});
  const[image, setImage] = useState("");
  const[text, setText] = useState("");
  const[container, setContainer] = useState("");
  const[imdbtext, setImdbtext] = useState("");

   const Handleclick = () =>{
       fetch("https://api.themoviedb.org/3/movie/"+Math.floor(Math.random()*100000).toString()+`?api_key=${process.env.REACT_APP_API_KEY}`)
      .then((res)=>res.json())
      .then((data)=>{
        if(data.success === false || data.poster_path === null){
           Handleclick();
        } else {
          setMovie(data);
          setImage("https://image.tmdb.org/t/p/w300" + data.poster_path);
          setText(data.id);
          setContainer("image_Text_Container");
          setImdbtext("IMDB Rating: "+ data.vote_average);
        }  
      })
  }
 
  return (
    <>
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{delay:0.1}}>
      <div className='homepage_Container'>
        <div className='homepage_Container_2'>
          <div className='container_Elements'>
            <h2>Generate Random Movie</h2>
            <button onClick={Handleclick}>Search</button>
          </div>
            <div className={container}>
              <img src={image} alt={text}/>
              <div className='movie_Texts'>
                  <div>{movie.original_title}</div>
                  <div>{imdbtext}</div>
              </div>
            </div>
        </div>
      </div>
    </motion.div>
    </>
  )
}

export default Home