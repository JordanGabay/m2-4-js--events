// Exercise 1.1
// ------------
console.log('exercise 1.1');
let state = false;
let result = document.querySelector('#result');

let clickEvent = function() {
    state = true;
}

let checkforwinner = function() {
    result.innerHTML = state ? 'You Win': 'You Lose';
    // if (state ) 
    //     result.innerHTML = 'you win' 
    // else
    //     result.innerHTML = 'you lose'
}

let timer = setTimeout(checkforwinner, 1000);

document.addEventListener('click', clickEvent);
