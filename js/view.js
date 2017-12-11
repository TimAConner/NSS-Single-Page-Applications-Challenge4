"use strict";

module.exports.showWeather = (data) => {
    let output = document.getElementById("output");

    /* jshint ignore:start */
    // console.log(data);
    /* jshint ignore:end */
    document.getElementById("weather-image").src = `img/weather-icons/animated/${data.img}.svg`;    
    document.getElementById("title").textContent = data.title;
    document.getElementById("description").textContent = data.desc;
    document.getElementById("temp").textContent = `${data.temp}F`;
    document.getElementById("low").textContent = `${data.low}F`;
    document.getElementById("high").textContent = `${data.high}F`;
    document.getElementById("humidity").textContent = `${data.humidity}`;
    document.getElementById("pressure").textContent = `${data.pressure}`;
};

const createTable = () => {

};

const createImg = (src) => {
    let img = document.createElement("img");
    img.src = `${src}`;
    return img;
};


/* Weather SVG Icons From: https://www.amcharts.com/free-animated-svg-weather-icons */