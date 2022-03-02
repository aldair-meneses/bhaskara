import {print_equation, guides, drag} from "./module.js";
import {window_result} from "./module.js";


const close_guide = document.querySelector("#close_btn");
const guide_button = document.querySelector("#guide_btn");
const help = document.querySelector("#guide_container");

guide_button.addEventListener("click", ()=> {
    help.classList.add("show");
});

help.addEventListener("click", (event)=>{
    if (event.target == help) {
        help.classList.remove("show");
    }
});

close_guide.addEventListener("click", ()=>{
    help.classList.remove("show");
});

const ax = document.querySelector("#a");
const bx = document.querySelector("#b");
const c_ = document.querySelector("#c");
const calc = document.querySelector("#calc");




function bhaskara(){

    const a = ax.value;
    const b = bx.value;
    const c = c_.value;
    const delta = b * b - 4 * a * c;

    
    print_equation("funciou amigo", "error");

    if (delta <  0) {
        guides()
        window_result.remove()
        print_equation("\\[x =  {-b \\pm \\sqrt { b^2 -4 \\cdot a \\cdot c } \\over 2 \\cdot a}  \\]","formula")
    }
    MathJax.typeset()

};


globalThis.addEventListener("load", (event)=>{
    drag();
    event.preventDefault();
    bhaskara();
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              