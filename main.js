import { drag, how_to, more_info, equation } from "./module.js";

globalThis.addEventListener("load", ()=>{
    more_info();
    drag();
})

const calc = document.querySelector("#calc");
const ax = document.querySelector("#a");
const bx = document.querySelector("#b");
const c_ = document.querySelector("#c");

function bhaskara(){   
    let a = ax.value;
    let b = bx.value;
    let c = c_.value;
    let delta = b ** 2 - 4 * a * c;
    console.log(`valor de delta puro: ${delta}`)
    let delta_root = Math.sqrt(delta)
    let x1 = (- b + delta_root) / (2 * a);
    let x2 = (- b - delta_root) / (2 * a);
    console.log('bhaskhara: rai1, raiz2, delta, raiz de delta: \n',x1,x2,delta,delta_root)
    
    if (x1 % 1 == 0 || x2 % 1 == 0) {
        equation(delta,delta_root,x1,x2)
       
    }else {
        x1 = x1.toFixed(2)
        x2 = x2.toFixed(2)
        delta_root = delta_root.toFixed(2)
        equation(delta,delta_root,x1,x2)
        console.log("bhaskhara fix: raiz1, raiz2, delta, raiz de delta: \n", x1,x2,delta,delta_root)
    }

    MathJax.typeset();    
}

calc.addEventListener("click", ()=>{
    how_to();
    bhaskara();
});