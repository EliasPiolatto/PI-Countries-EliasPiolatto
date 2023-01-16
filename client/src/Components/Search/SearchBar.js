import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../Redux/actions/actions";
import './SearchBar.css'

export default function SearchBar({setPagin}){
    const dispatch = useDispatch();
    const [name, setName] = useState('');


    function handleInput(e){
        e.preventDefault();
        setName(e.target.value);
    };

    function handleClick(e){
        e.preventDefault();
        dispatch(getByName(name));
        setPagin(1);
        setName('');     
    };

    return (
        <div className="searchBar">
          
            <button className="btn" type="submit" onClick={(e)=>handleClick(e)}> Go to </button>
        
            <input className="input"
                type= 'text'
                placeholder="Country..."
                value={name}
                onChange={(e)=>handleInput(e)}
            />

        </div>
    )
};
