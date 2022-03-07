export {more_info, how_to, drag, print_equation, variables}

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

function print_equation(equation, id) {
    const math = document.getElementById(`${id}`);
    math.innerHTML = (equation);
}

function how_to(how){
    let how_to_half = document.querySelectorAll('.half');
    for (how of how_to_half){
        how.style.display = ("block");
    }
}

function drag(){
    const drag =  document.getElementById("drag_off");
    drag.draggable = false;
}

// function non_root(){
//     let delta = b.value **2 - 4 * a.value * c.value;
//     print_equation("\\[x =  {-b \\pm \\sqrt { b^2 -4 \\cdot a \\cdot c } \\over 2 \\cdot a}  \\]","formula");
//     print_equation("\\[ax^2 + bx + c = 0 \\]", "equation_ex");
//     print_equation(`\\[ a = ${a.value} \\quad b = ${b.value} \\quad  c = ${c.value} \\]`, "add_equation");
//     print_equation("\\[ \\Delta = {b^2 - 4 \\cdot a \\cdot c }\\]", "delta_ex")
//     print_equation(`\\[ \\Delta = {${b.value}^2 - 4 \\cdot ${a.value} \\cdot ${c.value}} \\]`,"add_delta")
//     print_equation(`\\[ \\Delta = ${delta}\\]`,"delta_solved");
// }

// Constants 
    function variables(){
        const ax = document.querySelector("#a");
        const bx = document.querySelector("#b");
        const $c = document.querySelector("#c");
        let a = ax.value;
        let b = bx.value;
        let c = $c.value;
        let Delta = b ** 2 - 4 * a * c; 
        return console.log(Delta)
    }

    
    const window_result = document.querySelector("#window_result");
