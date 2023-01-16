import React,{ useState, useEffect } from "react";
import ContainerCards from "../../Containers/ContainerCards";
import { useSelector, useDispatch } from "react-redux";
import { getActivities, getCountries } from "../../Redux/actions/actions";
import Paginated from "../Paginated/Paginated";
import { orderBy } from "../../Redux/actions/orderBy";
import { filterAct, filterContinent } from "../../Redux/actions/filters";
import SearchBar from "../Search/SearchBar";
import './divsHome.css'



export default function Home(){

    const dispatch = useDispatch();

    const allCountries = useSelector((state)=> state.allCountries);
    const allActivities = useSelector((state)=> state.activities);
    
    const [currPage, setCurrPage] = useState(1);
    const [countriesPage, setCountriesPage] = useState(9);
    const lastCountry = currPage * countriesPage;
    const firstCountry = lastCountry - countriesPage;
    const currCountries = allCountries.slice(firstCountry, lastCountry);
    
    function paginatedNum(pageNum){
            setCurrPage(pageNum);
            pageNum === 1 ? setCountriesPage(9) : setCountriesPage(10);
        };

    useEffect(()=>{
            dispatch(getCountries());
            dispatch(getActivities());
        },[dispatch]);

    function handleOrder(e){
            e.preventDefault();
            dispatch(orderBy(e.target.value));
            setCurrPage(1);
        };
        
    function handleFilterAct(e){
        e.preventDefault();
        dispatch(filterAct(e.target.value));
        setCurrPage(1);
    };

    function handleFilterCont(e){
        e.preventDefault();
        dispatch(filterContinent(e.target.value));
        setCurrPage(1);
    };

    function onClick(){
        dispatch(getCountries());
        setCountriesPage(9);
        setCurrPage(1);
    };





    return (
      <div className="divsHome">

        <div>
          <div className="containerFilters">
            <select className="filter" onChange={e => handleFilterAct(e)}>
                    
              <option value='All'>Filter by activities</option>
              {
                allActivities?.map(act => {
                  return <option key={allActivities.indexOf(act)} value={act.name}>{act.name}</option>
                })
              }                   
            </select>
                
            <select className="filter" onChange={e => handleFilterCont(e)}>                  
              <option value='All' key='All'>Filter by continents</option>
              <option value='Africa' key='Africa'>Africa</option>
              <option value='Antarctica' key='Antarctica'>Antarctica</option>
              <option value='Asia' key='Asia'>Asia</option>
              <option value='Europe' key='Europe'>Europe</option>
              <option value='North America' key='NorthAmerica'>North America</option>
              <option value='Oceania' key='Oceania'>Oceania</option>
              <option value='South America' key='SouthAmerica'>South America</option>
            </select>

            <select className="filter" onChange={e => handleOrder(e)}>
              <option value='All'>Order by / Default</option>
              <option value='A-Z'>Order A-Z</option>
              <option value='Z-A'>Order Z-A</option>
              <option value='maxPop'>Order Max. pop. ▼</option>
              <option value='minPop'>Order Min. pop. ▲</option>
            </select>
                
            <button className="restore" onClick={()=>onClick()}>Restore</button>
          </div>

          <div>
            <SearchBar setPagin={paginatedNum}/>
          </div>
          <div>
            <Paginated 
              allCountries={allCountries}
              countriesPage={countriesPage}
              paginatedNum={paginatedNum}
            />
          </div>
            
          <div>
            <ContainerCards countries={currCountries}/>
          </div>      
        </div>
      </div>
    )
};

