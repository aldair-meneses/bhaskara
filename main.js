// import {PrintEquation} from './module.js';
import dragOff from './module';

window.addEventListener('load', ()=> {
    dragOff.draggable = 'false';
});    



const close_guide = document.querySelector('#close_btn');
const guide_button = document.querySelector('#guide_btn');
const help = document.querySelector('#guide_container');

guide_button.addEventListener('click', ()=> {
    help.classList.add('show');
});

help.addEventListener('click', (event)=>{
    if (event.target == help) {
        help.classList.remove('show');
    }
});

close_guide.addEventListener('click', ()=>{
    help.classList.remove('show')
});

const ax = document.querySelector('#a');
const bx = document.querySelector('#b');
const c_ = document.querySelector('#c');
const calc = document.querySelector('#calc');
const window_txt = document.querySelector('#window_result');



function bhaskara(){
    const a = ax.value;
    const b = bx.value;
    const c = c_.value;

    const delta = b * b - 4 * a * c;
};

calc.addEventListener('click', (event)=>{
    event.preventDefault();
    bhaskara();
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              