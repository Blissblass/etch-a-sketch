console.log('Test Message! If you\'re seeing this everything loaded correctly!');
const CONTAINER = document.querySelector('#container');
const RESBTN = document.querySelector('#resbtn');
const CLEARBTN = document.querySelector('#clear');

// We assign the column and row variables, and use the variables for the row n columns attributes
let a = 16;
let b = 16;
function setGrid() {
    CONTAINER.setAttribute("style", `grid-template-rows:repeat(${a}, 1em); grid-template-columns: repeat(${b}, 1em)`);
} 
// We create the cells
for(let i = 0; i < a*b; i++) {
    let div = document.createElement('div');
    div.classList.add('cell');
    CONTAINER.appendChild(div);
    setGrid();
}

// This section makes the pointer pains the cells black when you mouse over it
CONTAINER.addEventListener('mouseover', paint);
function paint(e) {
    // console.log(e.target);
    e.target.classList.add('paint');
    a = 30;
    b = 30;
}
const CELLS = document.querySelectorAll('.cell');
// This section makes the page reset the canvas while cleaning it
RESBTN.addEventListener('click', () => {
    for(i = 0; i < CELLS.length; i++) {
        CELLS[i].classList.remove('paint');
    }
    // asks you for a new canvas size
    let test = parseInt(prompt('Please choose canvas size!'));
    console.log(test);  
    if(test <= 100 && test > 0) {
        a = test;
        b = test;
        setGrid();
        CONTAINER.innerHTML = '';
        for(let i = 0; i < a*b; i++) {
            let div = document.createElement('div');
            div.classList.add('cell');
            CONTAINER.appendChild(div);
        }
    } 
    else {
        alert('Please select a value between 0 and 64!');
    }
});
// This section makes the button clear the canvas
CLEARBTN.addEventListener('click', () => {
    for(i = 0; i < CELLS.length; i++) {
        CELLS[i].classList.remove('paint');
    }
});