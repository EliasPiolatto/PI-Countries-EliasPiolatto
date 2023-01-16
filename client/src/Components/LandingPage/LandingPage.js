import React from 'react';
import {Link} from 'react-router-dom';
import './Landing.css';

export default function LandingPage(){
    return (
        <div className='landing'>
            <h1> WELCOME! </h1>
            <Link to='/home'>
            <button className='button'> LET'S GO! </button>
            </Link>
        </div>
    )
};