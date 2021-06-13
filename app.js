// Variables 
var form = document.getElementById('form');
var userInput = document.querySelector('.user-input');
var container = document.querySelector('.info-container');

var cname = document.querySelector('.name');
var country = document.querySelector('.country');
var weatherid = document.querySelector('.weather-id');
var weatherDes = document.querySelector('.weather-description');
var temperature = document.querySelector('.temperature');
var min = document.querySelector('.min');
var max = document.querySelector('.max');
var image = document.querySelector('.image');

var wind = document.querySelector('.wind-speed');

// Event Listeners 
form.addEventListener('submit', fetchData);

// API Key
apik = 'eab55233968fcfc4a028e68bbb6f02b2'

// Unhide div function 
function unhide (){
    console.log('hi');
    container.style.transition = 'ease-in 1s 1s ';
    container.style.display = "block";
}

// Measurements converters 
function conversion(val) {
    return (val - 273).toFixed(0);
}

function speedConverter(val) {
    return (val *  2.236936).toFixed(0);
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
        var weatherId = data.weather[0].main;
        var weatherDescription = data.weather[0].description;
        var wImage = data.weather[0].icon; 
        

        // Other Data 
        var windSpeed = data.wind.speed;

        // Print 
        cname.innerHTML = `${cityName}`;
        country.innerHTML = `${countryName}`;
        weatherid.innerHTML = `${weatherId}`;
        weatherDes.innerHTML = `${weatherDescription}`;
        temperature.innerHTML = `${ conversion(temp) } °C`;
        min.innerHTML = `&#x2193;  ${ conversion(tempMin) } °C`;
        max.innerHTML = `&#x2191;  ${ conversion(tempMax) } °C`;
        wind.innerHTML = `Wind: ${ speedConverter(windSpeed) } mph`;
        image.src = `https://openweathermap.org/img/wn/${wImage}.png`;

        unhide();
    }) 
    
    .catch(error => {
        alert('Please type in a valid city')
      });
      
    e.preventDefault();
}
