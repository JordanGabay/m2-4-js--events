//Exercise 2.2

const unclicked_Color = 'red';
const clicked_Color = 'green'
const font_Color = 'white';
const font_Size = '20px';
const font_Weight = '700';
const square_Sides = '100px';

let grid = document.createElement('div');
grid.style.display = 'flex';
grid.style.flexWrap = 'wrap';
grid.style.justifyContent = 'center';
grid.style.width = '80%';

for (let x = 1; x <= 20; x++) {
    let square = document.createElement('div');
    square.style.width = square_Sides;
    square.style.height = square_Sides;
    square.style.backgroundColor = unclicked_Color;
    square.style.color = font_Color;
    square.style.fontSize = font_Size;
    square.style.fontWeight = font_Weight;
    square.style.border = '1px solid white';
    square.style.display = 'flex';
    square.style.justifyContent = 'center';
    square.style.alignItems = 'center';
    square.innerHTML = x;


    grid.appendChild(square);
    square.addEventListener('click', () => {
        let currentColor = square.style.backgroundColor;
        square.style.backgroundColor = (currentColor == clicked_Color) ? unclicked_Color :  clicked_Color;
    });

}

document.querySelector('.main').append(grid);
