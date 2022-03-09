import { drag, how_to, more_info, equation } from "./module.js";

globalThis.addEventListener("load", ()=>{
    more_info();
    drag();
})

const calc = document.querySelector("#calc");
const ax = document.querySelector("#a");
const bx = document.querySelector("#b");
const $c = document.querySelector("#c");

function bhaskara(){   
    let a = ax.value;
    let b = bx.value;
    let c = $c.value;
    let $delta = b ** 2 - 4 * a * c;
    let x1 = (- b + Math.sqrt($delta)) / 2 * a;
    let x2 = (- b - Math.sqrt($delta)) / 2 * a; 
    equation($delta,x1,x2);

    
    MathJax.typeset();    
}

calc.addEventListener("click", ()=>{
    how_to();
    bhaskara();
});