import React from 'react';
import { Link } from "react-router-dom";
import './Card.css'

export default function Card({image, name, continent, id}) {

  return (

    <div className='cards'>

      <h3>{name}</h3>

      <Link to={`/detail/${id}`}>
      <img src={image} alt='Not flag' width='150px' height='100px'/>
      </Link>

      <h3>{continent}</h3>

    </div>
  )
};
