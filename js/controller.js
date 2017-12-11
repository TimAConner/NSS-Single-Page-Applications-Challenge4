"use strict";

let weatherLoader = require('./weatherLoader');
let weatherView = require('./view.js');

const createWeatherCard = (city, state) => {
    weatherLoader.getCurrentWeather(city, state).then(data => {
        if(data[0].response.hasOwnProperty("error") || data[1].response.hasOwnProperty("error")){
            weatherView.showAlert();
        } else {
            weatherView.hideAlert();
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
        }
    });  
};


const createYesterdayWeatherCard = (city, state) => {
    weatherLoader.getYesterdayWeather(city, state).then(data => {
        if(data[0].response.hasOwnProperty("error")){
            weatherView.showAlert();
        } else {
            weatherView.hideAlert();
            let observationData = data[0].history.observations[0];
            let weather = {
                title: observationData.conds,
                img: observationData.icon,
                high: observationData.tempi,
                low: observationData.tempm,
                temp: observationData.tempi,
                humidity: observationData.hum,
                pressure: observationData.pressurei
            };
            weatherView.showWeather(weather);
        }
    });  
};


const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports.activateDropdown = () => { 
    let dropdown = document.querySelector("#dropdown-menu");
    dropdown.addEventListener("click", () => {
        document.getElementById("forecast-default").textContent = event.target.textContent;
        if(event.target.id === "forecast-current"){
            let location = document.getElementById("location").value;
            let locationRegex = new RegExp('(.*), ([A-Z]{2})');
            let match = location.match(locationRegex);
            if(match){
                createWeatherCard(match[2], match[1]);
            } else {
                weatherView.showAlert();
            }
        } else if (event.target.id === "forecast-yesterday"){
            let location = document.getElementById("location").value;
            let locationRegex = new RegExp('(.*), ([A-Z]{2})');
            let match = location.match(locationRegex);
            if(match){
                createYesterdayWeatherCard(match[2], match[1]);
            } else {
                weatherView.showAlert();
            }
        }
    });
    
};

module.exports.hideAlert = () => {
    weatherView.hideAlert();   
};