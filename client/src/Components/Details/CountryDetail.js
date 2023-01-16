import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { getByID } from '../../Redux/actions/actions';
import ActivitiesDetail from './ActivitiesDetail';
import './Details.css'

export default function CountryDetail() {

const details = useSelector((state)=> state.detail);

const dispatch = useDispatch();

const {id} = useParams();

useEffect(()=>{
    dispatch(getByID(id));    
},);


  return (
    <div>
      <div className='detail'>

        <div className='imgDetail'>
        <img src={details.image} alt='Without flag'/>
        </div>

        <div className='info'>
        <h3>Code: {details.id}</h3>
        <h3>Country: {details.name}</h3>
        <h3>Continent: {details.continent}</h3>
        <h3>Capital: {details.capital}</h3>
        <h3>Subregion: {details.subregion}</h3>
        <h3>Area: {details.area} km²</h3>
        <h3>Population: {details.population} dwellers</h3>
        </div>

      </div>
      
      <div className='activ'>
        <ActivitiesDetail actsDetail={details.activities} country={details.name}/>
      </div>
      
      

      <Link to='/home'>
        <button className='btnDet'>Go to Home</button>
      </Link>
      
    </div>
  )
};

