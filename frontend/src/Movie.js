import React from 'react';
import "./Movie.css";

const Movie = (individualMovieData) => {
  return (
    <>
        <div className='movie_Container'> 
            <div className='movie_Image'>
                <img src={"https://image.tmdb.org/t/p/w300"+ individualMovieData.poster_path} alt={individualMovieData.id} />
            </div>
            <div className='movie_Texts'>
                <div className='title_Text'>{individualMovieData.title}</div>
                <div>IMDB Rating : {individualMovieData.vote_average}</div>
            </div>
        </div>
    </>
  )
}

export default Movie;