// Variables 
const form = document.getElementById('form');
const userInput = document.querySelector('.user-input');

// Event Listeners 
form.addEventListener('submit', fetchData);

// API Key
apik = 'eab55233968fcfc4a028e68bbb6f02b2'

// API fetch 
function fetchData (e){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + userInput.value + '&appid=' + apik)
    .then(res => res.json())
    .then(data => console.log(data))
    e.preventDefault();
}