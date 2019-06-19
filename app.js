// node app -d San Jose Costa Rica
// node app -d Madrid España
const { getLugarLatLng } = require('./lugar/lugar');
const argv = require('yargs').options({
   direccion: {
       alias: 'd',
       desc: 'Direccion de la ciudad para obtener el clima',
       demand: true
   }
}).argv;

// argv.direccion

getLugarLatLng(argv.direccion)
    .then(resp => console.log(resp));


