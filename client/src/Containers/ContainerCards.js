import React from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { getCountries } from "../actions/actions";
import Card from "../Components/Card/Card";
import './CardsContainer.css';





export default function ContainerCards({countries}) {


  return (
    <div className="cardsContainer">
      {
        countries?.map(c=>(
          <Card
          id={c.id}
          image={c.image}
          name={c.name}
          continent={c.continent}
          key={c.id}
          />
        ))
      }
    </div>
  )
};

