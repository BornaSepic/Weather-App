
const https = require('https');
const cityList = require('./city.list.json')

module.exports = {
    getCityID: function(cityName) {
        let cityNameCapitalized = capitalizeFirstLetter(cityName);
        const city = cityList.find(city => city.name === cityNameCapitalized);
        if (typeof city != 'object') {
            return ''
        }
        return `${city.id}`
    }, 
    getWeatherData: function(cityID) {
        const weatherDataObject = new Promise(function(resolve, reject) {
            https.get(`https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&APPID=6ad7e3922eb4293aa8b47ff3ee5fdd7c` , response => {
                let body = '';
                let weatherData = '';
                response.on('data', data => {
                    body += data.toString();
                });  
                response.on('end', () => {
                    weatherData = JSON.parse(body);
                    if (weatherData != '') {
                        resolve(weatherData)
                    } else {
                        reject('Something went wrong')
                    };
                }); 
            });  
        });
        weatherDataObject.catch(function(error){
            console.log(error);
        });
        return weatherDataObject;
    } 
};
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};


