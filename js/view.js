"use strict";

module.exports.showWeather = (data) => {
    let output = document.getElementById("output");
    document.getElementById("title").textContent = data.title;
    document.getElementById("weather-image").src = `img/weather-icons/animated/${data.img}.svg`;    
    document.getElementById("weather-summary").textContent = data.summary;
    document.getElementById("description").textContent = data.desc;
    document.getElementById("temp").textContent = `${data.temp}F`;

    if(data.low !== undefined){
        document.getElementById("low").innerHTML = "";
        let tempLowSpan = document.createElement("span");
        tempLowSpan.setAttribute("class", "font-weight-bold");
        tempLowSpan.textContent = `${data.low}F`;
        let tempLowText = document.createTextNode("Low ");
        document.getElementById("low").appendChild(tempLowText);
        document.getElementById("low").appendChild(tempLowSpan);
    } else {
        document.getElementById("low").innerHTML = "";
    }

    if(data.high !== undefined){    
        document.getElementById("high").innerHTML = "";
        let tempHighSpan = document.createElement("span");
        tempHighSpan.setAttribute("class", "font-weight-bold");
        tempHighSpan.textContent = `${data.high}F`;
        let tempHighText = document.createTextNode("High ");
        document.getElementById("high").appendChild(tempHighText);
        document.getElementById("high").appendChild(tempHighSpan);
    } else {
        document.getElementById("high").innerHTML = "";
    }

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


module.exports.showAlert = () => {
    $(".alert").show();
};

module.exports.hideAlert = () => {
    $(".alert").hide();
};

/* Weather SVG Icons From: https://www.amcharts.com/free-animated-svg-weather-icons */