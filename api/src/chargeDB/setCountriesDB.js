const axios = require('axios');
const { Country, Activity } = require('../db');



// Pregunto por info en DB, si no hay, la traigo de la API y la guardo en DB...
async function setCountriesDB(){

try {

const infoDB = await Country.findAll({include: Activity});

if(infoDB.length) return infoDB;

let resApi = await axios.get('https://restcountries.com/v3/all');
    

let result = resApi.data.map(ctry=> {                                       //Creo array con datos necesarios por cada pais, traidos de la api..
    
    return {
        id: ctry.cca3,
        name: ctry.name.common,
        image: ctry.flags[1] ? ctry.flags[1] : 'Not flag, sorry',
        continent: ctry.continents.toString(),
        capital: ctry.capital ? String(ctry.capital) : 'Without capital',
        subregion: ctry.subregion ? ctry.subregion : 'Without subregion',
        area: ctry.area,
        population: ctry.population
    }
});


result.forEach(async (c)=>{
     await Country.findOrCreate({
        where: {
            id: c.id
        },
        defaults: {
            name: c.name,
            image: c.image,
            continent: c.continent,                             //Creo los modelos y luego los busco con sus actividades y retorno el resultado...
            capital: c.capital,
            subregion: c.subregion,
            area: c.area,
            population: c.population
        }
    })
    });

    const countries = await Country.findAll({include: Activity});
    return countries;

    } catch (error) {
       return res.status(400).send('Not found data in DB');
    }
};

module.exports = {setCountriesDB};


