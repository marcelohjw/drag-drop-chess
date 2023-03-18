const king = document.querySelector('.chess-piece');
const squares = document.querySelectorAll('.square');
const info = document.querySelector('#info');

king.addEventListener('drag', dragging);
king.addEventListener('dragstart', dragStart);

squares.forEach(square => {
    square.addEventListener('dragover', dragOver);
    square.addEventListener('dragenter', dragEnter);
    square.addEventListener('dragleave', dragLeave);
    square.addEventListener('drop', dragDrop);
    square.addEventListener('dragend', dragEnd);
});

let beingDragged;

function dragging() {
    info.textContent = 'O ' + beingDragged.id + ' move!';
}

function dragStart(e) {
    beingDragged = e.target;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.target.classList.add('highlight');
}

function dragDrop(e) {
    e.target.append(beingDragged);
    setTimeout(() => e.target.classList.remove('highlight'), 100);
}

function dragLeave(e) {
    e.target.classList.remove('highlight');
}

function dragEnd(e) {
    e.target.classList.add('target');
    setTimeout(() => e.target.classList.remove('target'), 100);
    info.textContent = '';
}
