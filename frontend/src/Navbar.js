import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
            <div className='navbar_Container'>
                <Link className='nav_Linkstyle' to="/movie-suggestor-2/">Home</Link>
                <Link className='nav_Linkstyle' to="/movie-suggestor-2/popularmovies">Popular Movies</Link>
                <Link className='nav_Linkstyle' to="/movie-suggestor-2/topratedmovies">Top Rated Movies</Link>
                <Link className='nav_Linkstyle' to="/movie-suggestor-2/searchmovies">Search Movies</Link>
            </div>
    </>
  )
}

export default Navbar