import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
            <div className='navbar_Container'>
                <Link className='nav_Linkstyle' to="/">Home</Link>
                <Link className='nav_Linkstyle' to="/popularmovies">Popular Movies</Link>
                <Link className='nav_Linkstyle' to="/topratedmovies">Top Rated Movies</Link>
                <Link className='nav_Linkstyle' to="/searchmovies">Search Movies</Link>
            </div>
    </>
  )
}

export default Navbar