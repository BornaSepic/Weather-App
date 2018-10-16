const express = require('express');
const router = express.Router();
const tools = require('./tools');
const async = require('async');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.use("/:name", async (req, res) => {
    const cityName = req.params.name;
    const cityID = tools.getCityID(cityName);
    if (cityID === '') {
        res.send('No such city')
        return
    }
    const weatherData = tools.getWeatherData(cityID);
    res.send(await weatherData)    
});

//If route not defined
router.get('*', function(req, res) {
    res.send('Sorry, this is an invalid URL');
});

module.exports = router;