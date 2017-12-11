"use strict";

let weatherLoader = require('./weatherLoader');
let weatherView = require('./view.js');

const createWeatherCard = (city, state, type) => {
    weatherLoader.getWeather(city, state, type).then(data => {
        if(data[0].response.hasOwnProperty("error")){
            weatherView.showAlert();
        } else {
            weatherView.hideAlert();

            let weather = {};

            if(type === "forecast-current"){
                let forecastData = data[0].forecast.simpleforecast.forecastday[0];
                let conditionData = data[1].current_observation;
                weather = {
                    title: `Today in ${city}`,
                    summary: forecastData.conditions,
                    img: forecastData.icon,
                    high: forecastData.high.fahrenheit,
                    low: forecastData.low.fahrenheit,
                    temp: conditionData.temp_f,
                    humidity: conditionData.relative_humidity,
                    pressure: conditionData.pressure_in
                };
            } else if (type === "forecast-yesterday"){
                let observationData = data[0].history.observations[0];
                weather = {
                    title: `Yesterday in ${city}`,
                    summary: observationData.conds,
                    img: observationData.icon,
                    high: observationData.tempi,
                    low: observationData.tempm,
                    temp: observationData.tempi,
                    humidity: observationData.hum,
                    pressure: observationData.pressurei
                };
            } else if (type === "forecast-hourly"){
                console.log(data);
                let observationData = data[0].hourly_forecast[0];
                weather = {
                    title: `Hourly in ${city}`,
                    summary: observationData.condition,
                    img: observationData.icon,
                    temp: observationData.temp.english,
                    humidity: observationData.humidity,
                    pressure: observationData.mslp.english
                };
            }
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

        let location = document.getElementById("location").value;
        let locationRegex = new RegExp('(.*), ([A-Z]{2})');
        let match = location.match(locationRegex);
        if(match){
            if(event.target.id === "forecast-current" || event.target.id === "forecast-hourly" || event.target.id === "forecast-yesterday"){
                createWeatherCard(match[1], match[2], event.target.id);
            }
           
        } else {
            weatherView.showAlert();
        }


    });
    
};

module.exports.hideAlert = () => {
    weatherView.hideAlert();   
};