const xhr = new XMLHttpRequest();
const city = document.querySelector('.city').value;

xhr.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`, true);

xhr.onload = function () {
  if (xhr.status === 200) {
    const weatherData = JSON.parse(xhr.responseText);

    const weatherWrap = document.querySelector('.weather-wrap');
    weatherWrap.querySelector('.city').textContent = 'City: ' + weatherData.name;
    weatherWrap.querySelector('.temp').textContent = 'Temperature: ' + weatherData.main.temp;
    weatherWrap.querySelector('.pressure').textContent = 'Pressure: ' + weatherData.main.pressure;
    weatherWrap.querySelector('.description').textContent = 'Description: ' + weatherData.weather[0].description;
    weatherWrap.querySelector('.humidity').textContent = 'Humidity: ' + weatherData.main.humidity;
    weatherWrap.querySelector('.speed').textContent = 'Wind speed: ' + weatherData.wind.speed;
    weatherWrap.querySelector('.deg').textContent = weatherData.wind.deg;

    const iconCode = weatherData.weather[0].icon;
    const iconImg = document.querySelector('img');
    iconImg.src = `http://openweathermap.org/img/w/${iconCode}.png`;
  } else {
    console.error(xhr.status);
  }
};

xhr.send();
