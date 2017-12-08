"use strict";

let weatherLoader = require('./weatherLoader');
let weatherView = require('./view.js');

module.exports.createPage = () => {
    weatherLoader.loadWeatherData().then(data => {
        let weather = {
            title: data.list[0].weather[0].main,
            desc: capitalize(data.list[0].weather[0].description),
            high: data.list[0].main.temp_max,
            low: data.list[0].main.temp_min,
            temp: data.list[0].main.temp,
            humidity: data.list[0].main.humidity,
            pressure: data.list[0].main.pressure
        };
        weatherView.showWeather(weather);
        
        // weatherView.cre
    });  
};

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};