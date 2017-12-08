# NSS-Single-Page-Applications-Challenge4
## Motivation
This was Javascript practice done while attending the [Nashville Software School](http://nashvillesoftwareschool.com/).

## Synopsis / Instructions

#### Use the OpenWeather API to build a weather forecast search tool

* Pick three types of forecasts to choose from
* User inputs zipcode and selects forecast type from a dropdown
* Use an xhr to fetch the api data. The syntax will be just like the calls you
  have written to fetch a local JSON file, only you'll be pulling in remote
  data. It will return the data in JSON by default
* Present the returned data in a nicely styled display. Use a image to accompany
  the forecast/conditions, such as a cloud with raindrops when the chance for
  precip is above a certain percentage.
* The UI should use Bootstrap

OpenWeatherMap API (scroll to bottom to see documentation)

> http://openweathermap.org/api

You must sign up to receive an API key

> http://home.openweathermap.org/users/sign_up

Example of an API call to get a 5-day forecast for 37201

> api.openweathermap.org/data/2.5/weather?zip=37201&APPID=1111111111
## Setup to Contribute
1. Clone
1. git checkout -b myBranchName
1. Run npm install
1. Add Gruntfile.js 