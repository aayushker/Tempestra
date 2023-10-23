const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cf372d5e48mshc3464f2d07a949dp15564fjsn1d50fdc6fd23",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

async function getWeather() {
  const response = await fetch(url, options);
  const weather = await response.json();
  console.log(weather);
  cloud_pct.innerhtml = response.cloud_pct;
  temp.innerhtml = response.temp;
  feels_like.innerhtml = response.feels_like;
  humidity.innerhtml = response.humidity;
  min_temp.innerhtml = response.min_temp;
  max_temp.innerhtml = response.max_temp;
  wind_speed.innerhtml = response.wind_speed;
  wind_degrees.innerhtml = response.wind_degrees;
  sunrise.innerhtml = response.sunrise;
  sunset.innerhtml = response.sunset;
}

getWeather();
