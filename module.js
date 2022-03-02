export {guides, drag, print_equation, window_result}

function print_equation(equation, id) {
    const math = document.getElementById(`${id}`);
    math.innerHTML = (equation);
}

function guides(){
    let result_guide = document.querySelectorAll(".half");
    for (guides of result_guide){
        guides.style.display = ("block")
    }
}

const window_result = document.querySelector("#window_result");

function drag(){
    const drag =  document.getElementById("drag_off");
    drag.draggable = false;
}

    


