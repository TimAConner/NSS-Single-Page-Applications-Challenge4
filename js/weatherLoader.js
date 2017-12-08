"use strict";
// API Key 0137baa2c4261fcc29b7b716ec3c3843

module.exports.loadWeatherData = () => {
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
        xhr.open("GET", "../js/exampleData.json");
        xhr.send();
    });
};