import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css'



export default function NavBar() {

  const location = useLocation();

  return (
    <div className='nav'>
      {
        location.pathname !== '/' &&
        <>
        <Link to='/home'>
          <h3>Home</h3>
        </Link>

        <Link to='/form'>
          <h3>New activity</h3>
        </Link>

        <Link to='/activities'>
          <h3>List of activities</h3>
        </Link>
        </>
      }
    </div>
  )
};

