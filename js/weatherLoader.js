"use strict";

// let forecastOptions = {
//     "forecast-16-day": "forecast10day",
//     "forecast-3-day": "forecast", 
//     "forecast-current-day": "weather"   
// };

// for(property in forecastOptions){
//     if(property === id){
//         go to forecastOptions[property];
//     }
// }

// module.exports.getForecastOption = ( string) => {
//     return x => forecastOptions
// }


let yesterdayDate = new Date();
yesterdayDate.setDate(yesterdayDate.getDate() - 1);
yesterdayDate = `${yesterdayDate.getFullYear()}${yesterdayDate.getMonth() + 1}${yesterdayDate.getDate()}`;

let forecastTypes = {
    "forecast-current": ['forecast10day', 'conditions'],
    "forecast-yesterday": [`history_${yesterdayDate}`],
    "forecast-hourly": ['hourly']
};

module.exports.getWeather = (city, state, type) => {

    return new Promise(function (resolve, reject) {
        let apiKey = loadData("../js/apiKey.json").then(data => {
            let key = data.key; 

            // Loops through required json data that is required for the forecast
            let promiseArray = [];
            findForecasts(type).forEach((element) => {
                promiseArray.push(loadData(`http://api.wunderground.com/api/${key}/${element}/q/${state}/${city}.json`));
            });
            
            Promise.all(promiseArray).then(data => {
                resolve(data);
            });
        });
    });
};

const findForecasts = (string) => {
    for(let prop in forecastTypes){
        if(prop === string){
            return forecastTypes[prop];
        }
    }
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