const { Country, Activity } = require('../db');
const {setCountriesDB} = require('../chargeDB/setCountriesDB');





//             GET DE TODOS LOS PAISES O FILTRADOS POR QUERY =======>>>
async function getCountries (req, res){
    let allCountries = await setCountriesDB();     //Se cargan los datos en DB....

    const { name } = req.query;

try {                                                //Si hay query, se busca coincidencia...
    if(name){
        let countryName = allCountries.filter(c=>c.name.toLowerCase().startsWith(name.toLowerCase()));

        if(countryName.length) return res.status(200).send(countryName);
      
    return res.status(400).send({message: `No dates for ${name}`});

    } else {

        return res.status(200).send(allCountries);
    };
} catch (error) {
    return res.status(400).send(error, 'No related data ')
};
      
};




//                        GET DE UN PAIS POR ID =========>>>
async function getById(req, res){
    let {id} = req.params;
    id = id.toUpperCase();
try {
    if(id.length) {
        let matchId = await Country.findByPk(id, {include: Activity});

                                                                    //Si hay resultado, se crea un modelo con los datos para detalles...
        matchId = {
                id: matchId.id,
                name: matchId.name,
                image: matchId.image,
                continent: matchId.continent,
                capital: matchId.capital,
                subregion: matchId.subregion,
                area: matchId.area,
                population: matchId.population,
                activities: matchId.activities.map((e) => {
                    return {
                        id: e.id,
                        name: e.name,
                        difficulty: e.difficulty,
                        duration: e.duration,
                        season: e.season
                    }
                })
        };

        if(matchId) return res.status(200).send(matchId);
        
        return res.status(400).send({message: 'No related data'});
        
    };
}
catch (error) {    
    res.status(400).send('Not matched by ID')
}
};

module.exports = {getCountries, getById};