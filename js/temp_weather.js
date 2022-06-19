const API_KEY = "777218f7482182d9a09fbe3d5ddb54a1"; // this key is active till this weekend

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:last-child");
      weather.innerText = `${(data.main.temp - 273.15).toFixed(1)} ℃`;
    });
}
function onGeoError() {
  alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// const tempWeather = document.querySelector("#weather");
// tempWeather.innerText = "Lab Temperature: 298.03";
