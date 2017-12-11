"use strict";
// API Key 

let forecastOptions = {
    "forecast-16-day": "daily",
    "forecast-3-day": "forecast", 
    "forecast-current-day": "weather"   
};

// for(property in forecastOptions){
//     if(property === id){
//         go to forecastOptions[property];
//     }
// }


module.exports.loadWeatherData = (url) => {

    return new Promise(function (resolve, reject) {
        let apiKey = loadData("../js/apiKey.json").then(data => {
            let key = data.key; 
            let tenDayForecast = loadData(`http://api.wunderground.com/api/${key}/forecast10day/q/TN/Nashville.json`);
            let conditionsForecast = loadData(`http://api.wunderground.com/api/${key}/conditions/q/TN/Nashville.json`);

            Promise.all([tenDayForecast, conditionsForecast]).then(data => {
                resolve(data);
            });
        });
    });
};

const loadData = (url) => {
    return new Promise(function (resolve, reject) {
        let xhr =  new XMLHttpRequest();
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.addEventListener("error", function(){
            alert("Sorry!  There was an error.  Please try again later.");
        });
        xhr.open("GET", url);
        xhr.send();
    });
};