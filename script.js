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
  cloud_pct = response.cloud_pct;
  temp = response.temp;
  feels_like = response.feels_like;
  humidity = response.humidity;
  min_temp = response.min_temp;
  max_temp = response.max_temp;
  wind_speed = response.wind_speed;
  wind_degrees = response.wind_degrees;
  sunrise = response.sunrise;
  sunset = response.sunset;
}

getWeather();
