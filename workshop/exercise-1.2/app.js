// Exercise 1.2
// ------------
console.log('exercise 1.2');

let state = false; 
let result = document.querySelector('#result');


let clickEvent = function() {
    state = true;
}

const updateCountdown = () => {
    document.querySelector('#time').innerHTML = --time;
    if (time == 0) 
    clearInterval(countdown);
}

let checkForWinner = function() {
    result.innerHTML = state ? 'You Win' : 'You Lose';
}

let time = Math.floor(Math.random() * 5) + 1;
document.querySelector('#time').innerHTML = time;

let countdown = setInterval(updateCountdown, 1000);
let timer = setTimeout(checkForWinner, time*1000);


document.addEventListener('click', clickEvent);



