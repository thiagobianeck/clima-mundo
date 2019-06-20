const axios = require('axios');

const getClima = async (lat, lng) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=9361a20eec0d40d07e8e7521753f4311`);

    return resp.data.main.temp;
};

module.exports = { getClima };
