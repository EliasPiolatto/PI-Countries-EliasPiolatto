import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivities } from '../../Redux/actions/actions';
import deleteAct from '../../Redux/actions/deleteAct';
import { Link } from 'react-router-dom';







export default function ListActivities() {

  const activities = useSelector((state)=> state.activities);  

  const dispatch = useDispatch();

  const [activs, setActivs] = useState(activities);

  useEffect(()=>{
    dispatch(getActivities())
  },[activs]);

    
  function handleDeleteActivity(idAct){
    dispatch(deleteAct(idAct));
    setActivs(activities);
  };

  return (
    <div>
      <div className='tableList'>
      <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Difficulty</th>
              <th>Duration</th>
              <th>Season</th>
              <th>Country</th>
              <th>Delete</th>
            </tr>
            {
              activities?.map(el => {
                const country = el.countries.map(e=> {
                  return (
                    <ul key={e.name}><li>{e.name}</li></ul>
                  )});

                return (
                <tr key={el.id}>
                  <td>{el.name}</td>
                  <td>{el.difficulty}</td>
                  <td>{el.duration}</td>
                  <td>{el.season}</td>
                  <td>{country}</td>
                  <td><button className='close' onClick={()=>handleDeleteActivity(el.id)}>X</button></td>  
                </tr>
                )
              })
            }
          </tbody> 
        </table>
        <Link to='/home'>
        <button className='btnDet'>Go to Home</button>
      </Link>
      </div>
    </div>
  )
};
