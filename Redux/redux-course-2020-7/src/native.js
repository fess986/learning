import './styles.css'

const counter = document.querySelector('#counter');
const add = document.querySelector('#add');
const sub = document.querySelector('#sub');
const async = document.querySelector('#async');
const theme = document.querySelector('#theme');


let state = 0;

const render = () => {
    counter.innerText = state.toString();
}


add.addEventListener('click', () => {
    state++;
    render();
})

sub.addEventListener('click', () => {
    state--;
    render();
})

async.addEventListener('click', () => {
    setTimeout(()=> {
        state+=100;
        render();
    }, 1000)
})

theme.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    render();
})

    render();