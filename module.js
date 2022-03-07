import { non_root } from "./equations.js"
export { more_info, how_to, drag, equation }

function more_info(){
    let guide_button = document.querySelector('#guide_btn')
    let help = document.querySelector('#guide_container')
    let close_info = document.querySelector('#close_btn')
    guide_button.addEventListener("click", ()=> {
    help.classList.add("show");
});

close_info.addEventListener("click", ()=>{
    help.classList.remove("show");
});

help.addEventListener("click", (event)=>{
    if (event.target == help) {
        help.classList.remove("show");
    }
});

}

function how_to(how){
    let window_result = document.querySelector('#window_result');
    window_result.style.display = ("none")
    let how_to_half = document.querySelectorAll('.half');
    for (how of how_to_half){
        how.style.display = ("block");
    }
}

function drag(){
    const drag =  document.getElementById("drag_off");
    drag.draggable = false;
}


function print_equation(equation, id) {
    const math = document.getElementById(`${id}`);
    math.innerHTML = (equation);
}

function equation(delta){
    if (delta < 0 ){
        non_root();
        print_equation("\\[x =  {-b \\pm \\sqrt { b^2 -4 \\cdot a \\cdot c } \\over 2 \\cdot a}  \\]","formula");
        print_equation("\\[ax^2 + bx + c = 0 \\]", "equation_ex");    
        print_equation(`\\[ a = ${a.value} \\quad b = ${b.value} \\quad  c = ${c.value} \\]`, "add_equation");
        print_equation("\\[ \\Delta = {b^2 - 4 \\cdot a \\cdot c }\\]", "delta_ex");
        print_equation(`\\[ \\Delta = {${b.value}^2 - 4 \\cdot ${a.value} \\cdot ${c.value}} \\]`,"add_delta")
        print_equation(`\\[ \\Delta = ${delta}\\]`,"delta_solved");        
    }
    else {
        
    }
}

    
