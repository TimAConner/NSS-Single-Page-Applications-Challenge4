"use strict";

module.exports.showWeather = (data) => {
    let output = document.getElementById("output");

    /* jshint ignore:start */
    // console.log(data);
    /* jshint ignore:end */

    document.getElementById("title").textContent = data.title;
    document.getElementById("description").textContent = data.desc;
    document.getElementById("temp").textContent = `${data.temp}`;
    document.getElementById("low").textContent = `${data.low}`;
    document.getElementById("high").textContent = `${data.high}`;
    document.getElementById("humidity").textContent = `${data.humidity}%`;
    document.getElementById("pressure").textContent = `${data.humidity}`;
};

const createTable = () => {

};

const createImg = (src) => {
    let img = document.createElement("img");
    img.src = `${src}`;
    return img;
};


/* Weather SVG Icons From: https://www.amcharts.com/free-animated-svg-weather-icons */