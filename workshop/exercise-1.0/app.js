// Exercise 1.0
// ------------
console.log('exercise-1');

const body = document.querySelector('body');
const result = document.getElementById('result');

let clickEvent = function() {
    result.innerText ="Good Job!";
    body.removeEventListener('click', clickEvent);
}

body.addEventListener('click', clickEvent);
