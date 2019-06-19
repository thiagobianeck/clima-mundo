
const axios = require('axios');

const getLugarLatLng = async ( dir ) => {

    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': 'f88214a64bmsh20150f482c8ce33p16cf69jsnf0297f2aa0ef'}
    });

    const resp = await instance.get();

    if( resp.data.Results.lenght === 0 ) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

};

module.exports = { getLugarLatLng };
