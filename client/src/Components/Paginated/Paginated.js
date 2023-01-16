import React from 'react';
import './Paginated.css';








export default function Paginated({allCountries, countriesPage, paginatedNum}) {



    let pagesNumber = [];

    for (let i = 1; i <= Math.ceil(allCountries.length/countriesPage); i++) {
        pagesNumber.push(i)  
    };

    return (
        <nav>
            <ul className="paging">
                {
                    pagesNumber?.map(num => (
                        <a onClick={()=> paginatedNum(num)} key={num}> {num} </a>
                    ))
                }
            </ul>
        </nav>
    )
};

 