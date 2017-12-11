"use strict";

let weatherLoader = require('./weatherLoader');
let weatherView = require('./view.js');

const createWeatherCard = (city, state) => {
    weatherLoader.loadWeatherData(city, state).then(data => {
        console.log(data);
        let forecastData = data[0].forecast.simpleforecast.forecastday[0];
        let conditionData = data[1].current_observation;
        let weather = {
            title: forecastData.conditions,
            img: forecastData.icon,
            // desc: capitalizeFirstLetter(data.list[0].weather[0].description),
            high: forecastData.high.fahrenheit,
            low: forecastData.low.fahrenheit,
            temp: conditionData.temp_f,
            humidity: conditionData.relative_humidity,
            pressure: conditionData.pressure_in
        };
        weatherView.showWeather(weather);
    });  
};

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports.activateDropdown = () => { 
    let dropdown = document.querySelector("#dropdown-menu");
    dropdown.addEventListener("click", () => {
        let location = document.getElementById("location").value;
        let locationRegex = new RegExp('(.*), ([A-Z]{2})');
        let match = location.match(locationRegex);
        if(match){
            createWeatherCard(match[2], match[1]);
        }
    });
    
};