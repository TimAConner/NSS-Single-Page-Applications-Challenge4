# NSS-Single-Page-Applications-Challenge4
## Motivation
This was Javascript practice done while attending the [Nashville Software School](http://nashvillesoftwareschool.com/).

## Synopsis / Instructions

#### Use the Weather Underground API to build a weather forecast search tool

* Pick three types of forecasts to choose from
* User inputs zipcode and selects forecast type from a dropdown
* Use an xhr to fetch the api data. The syntax will be just like the calls you
  have written to fetch a local JSON file, only you'll be pulling in remote
  data. It will return the data in JSON by default
* Present the returned data in a nicely styled display. Use a image to accompany
  the forecast/conditions, such as a cloud with raindrops when the chance for
  precip is above a certain percentage.
* The UI should use Bootstrap


## Getting Involved
1. Weather Underground API

> https://www.wunderground.com/weather/api

2. Add a file named `apiKey.json` in js/
3. Structure it like below
```` 
{
    "key": "[yourKey]"
}
````

## Setup to Contribute
1. Clone
1. git checkout -b myBranchName
1. Run npm install
1. Add Gruntfile.js 

## Non NPM Sources Used
1. http://openweathermap.org
1. https://www.amcharts.com/free-animated-svg-weather-icons/
