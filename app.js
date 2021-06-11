const form = document.getElementById('form').addEventListener('submit', myFunc)

function myFunc(e){
    console.log('Success');
    e.preventDefault();
}