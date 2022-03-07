import {drag, more_info, variables} from "./module.js";


// globalThis.addEventListener("load", ()=>{
//     more_info();
// })


const calc = document.querySelector("#calc");

// function bhaskara(){    
//     variables();
// }

calc.addEventListener("click", ()=>{
    drag();
    variables();
});