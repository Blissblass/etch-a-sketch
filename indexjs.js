const CONTAINER = document.querySelector('#container');
console.log(CONTAINER);

for(let i = 0; i < 16*16; i++) {
    let div = document.createElement('div');
    div.classList.add('cell');
    CONTAINER.appendChild(div);
}

CONTAINER.addEventListener('mouseover', paint);

function paint(e) {
    // console.log(e.target);
    e.target.style.backgroundColor = 'black';
}