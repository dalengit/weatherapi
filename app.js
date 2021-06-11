// Variables 
var form = document.getElementById('form');
var userInput = document.querySelector('.user-input');

var cname = document.querySelector('.name');
var country = document.querySelector('.country');
var weatherCon = document.querySelector('.weather-condition');
var weatherDes = document.querySelector('.weather-description');
var temperature = document.querySelector('.temperature');
var min = document.querySelector('.min');
var max = document.querySelector('.max');

var wind = document.querySelector('.wind-speed');
var rise = document.querySelector('.sunrise');
var set = document.querySelector('.sunset');
var timezone = document.querySelector('.timezone');

// Event Listeners 
form.addEventListener('submit', fetchData);

// API Key
apik = 'eab55233968fcfc4a028e68bbb6f02b2'

// Kelvin converter 
function conversion(val) {
    return (val - 273).toFixed(2);
}

// API fetch 
function fetchData (e){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + userInput.value + '&appid=' + apik)
    .then(res => res.json())
    .then(data => {

        // Main Data 
        var cityName = data.name;
        var countryName = data.sys.country;
        var temp = data.main.temp;
        var tempMin = data.main.temp_min;
        var tempMax = data.main.temp_max;
        var weatherId = data.weather.main;
        var weatherDescription = data.weather.description; 

        // Other Data 
        var windSpeed = data.wind.speed;
        var sunrise = data.sys.sunrise; 
        var sunset = data.sys.sunset; 
        var timeZone = data.timezone; 

        // Print 
        cname.innerHTML = `${cityName}`;

        console.log('succ');
    }) 
    
    .catch(error => {
        alert('Please type in a valid city')
      });

    e.preventDefault();
}
