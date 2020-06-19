//Exercise 2.1 Buttons!

//Add the CSS stuff in JS//
const unclickedColor = 'red';
const clickedColor = 'green';
const font_Color ='white';
const font_Size = '20px';
const font_Weight = '700';
const SQUARE_SIDE_LENGTH = '100px';

//Create the grid for the Buttons//
let grid = document.createElement('div');
grid.style.display = 'flex';
grid.style.flexWrap = 'wrap';
grid.style.justifyContent = 'center';
grid.style.width = '80%';

for(let i = 1; i <= 20; i++) {
    let square = document.createElement('div');
    square.style.width = SQUARE_SIDE_LENGTH;
    square.style.height = SQUARE_SIDE_LENGTH;
    square.style.backgroundColor = unclickedColor;
    square.style.color = font_Color;
    square.style.fontSize = font_Size;
    square.style.fontWeight = font_Weight;
    square.style.border = '1px solid white';
    square.style.display = 'flex';
    square.style.justifyContent = 'center';
    square.style.alignItems = 'center';
    square.innerHTML = i;

    square.addEventListener('click', () => square.style.backgroundColor = clickedColor);

    grid.appendChild(square);
}

document.querySelector('.main').appendChild(grid);