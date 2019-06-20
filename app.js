// node app -d San Jose Costa Rica
// node app -d Madrid España
const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');


const argv = require('yargs').options({
   direccion: {
       alias: 'd',
       desc: 'Direccion de la ciudad para obtener el clima',
       demand: true
   }
}).argv;

// argv.direccion

// getLugarLatLng(argv.direccion)
//     .then(resp => console.log(resp));

// getClima(40.750000, -74.000000)
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err));

const getInfo = async ( direccion ) => {
    // return { direccion, lat, lng };
    try {
        let lugar = await getLugarLatLng(direccion);
        let temp = await getClima(lugar.lat, lugar.lng);
        return `El clima de ${lugar.direccion} és de ${temp}`;
    } catch (e) {
        return  `No se pudo determinar El clima de ${direccion}.`;
    }
};

getInfo( argv.direccion )
    .then(resp => console.log(resp))
    .catch(err => console.log(err));
