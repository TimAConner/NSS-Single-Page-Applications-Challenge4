"use strict";

let weatherLoader = require('./weatherLoader');

module.exports.createPage = () => {
    weatherLoader.loadWeatherData().then(data => {
        console.log(data);
    });  
};