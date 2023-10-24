const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cf372d5e48mshc3464f2d07a949dp15564fjsn1d50fdc6fd23",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

async function getWeather(city){
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const cityName = document.getElementById('cityName');
  cityName.innerHTML = city;
  const response = await fetch(url, options);
  const weather = await response.json();
  console.log(weather);
  document.getElementById('cloud_pct').innerHTML = weather.cloud_pct;
  document.getElementById('temp').innerHTML = weather.temp;
  document.getElementById('feels_like').innerHTML = weather.feels_like;
  document.getElementById('humidity').innerHTML = weather.humidity;
  document.getElementById('min_temp').innerHTML = weather.min_temp;
  document.getElementById('max_temp').innerHTML = weather.max_temp;
  document.getElementById('wind_speed').innerHTML = weather.wind_speed;
  document.getElementById('wind_degrees').innerHTML = weather.wind_degrees;
  document.getElementById('sunrise').innerHTML = weather.sunrise;
  document.getElementById('sunset').innerHTML = weather.sunset;
}

const submitButton = document.querySelector('.btn');
const cityInput = document.querySelector('.form-control');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  getWeather(cityInput.value);
})

getWeather('Delhi');
