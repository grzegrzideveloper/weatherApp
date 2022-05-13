//Init weather
const weather = new Weather;

const citySpan = document.getElementById('city');
const weatherSpan = document.getElementById('weather');
const tempSpan = document.getElementById('temp');
const feelsLikeSpan = document.getElementById('feels_like');
const windSpan = document.getElementById('wind');
const weatherIcon = document.getElementById('icon');
const kelvin = 273.15;
const form = document.getElementById('city-form');
const ul = document.querySelector('.list-group');

form.addEventListener('submit', function(e) {
    const city = document.getElementById('city-input').value;
    weather.getWeather(city)
    .then(data => {
        showWeather(data);
        console.log(data);
    })
    .catch(() => {
        showAlert();
        
    });
    e.preventDefault();
    
});





const showWeather = function(weather){
    clearWeather();
    if (ul.style.display === 'none'){
        ul.style.display = 'inline';
    }
    weatherIcon.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    citySpan.innerHTML += `${weather.name}, ${weather.sys.country}`;
    weatherSpan.innerHTML += weather.weather[0].main;
    tempSpan.innerHTML += `${(weather.main.temp - kelvin).toFixed(2)}°C`;
    feelsLikeSpan.innerHTML += `${(weather.main.feels_like - kelvin).toFixed(2)}°C`;
    windSpan.innerHTML += `${weather.wind.speed}m/s`
}
const clearWeather = function(){
    weatherIcon.src = '';
    citySpan.innerHTML = '';
    weatherSpan.innerHTML = '<b>Weather: </b>';
    tempSpan.innerHTML = '<b>Temperature: </b>';
    feelsLikeSpan.innerHTML = '<b>Feels Like: </b>';
    windSpan.innerHTML = '<b>Wind speed: </b>';
}
const showAlert = function(){
    ul.style.display = 'none';
    const div = document.createElement('div');
    const container = document.querySelector('.card');
    console.log(container);
    const cardBody = document.querySelector('.card-body');
    
    console.log(cardBody);
    div.className = 'alert alert-danger  rounded mt-3 ';
    div.innerText = 'City not found';
    container.insertBefore(div, cardBody);
    setTimeout(() => {div.remove();}, 3000);
    
}
