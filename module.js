export {how_to, drag, print_equation, non_root, full_sub, window_result}

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

const window_result = document.querySelector("#window_result");

function drag(){
    const drag =  document.getElementById("drag_off");
    drag.draggable = false;
}

function non_root(){
    let delta = b.value **2 - 4 * a.value * c.value;
    print_equation("\\[x =  {-b \\pm \\sqrt { b^2 -4 \\cdot a \\cdot c } \\over 2 \\cdot a}  \\]","formula");
    print_equation("\\[ax^2 + bx + c = 0 \\]", "equation_ex");
    print_equation(`\\[ a = ${a.value} \\quad b = ${b.value} \\quad  c = ${c.value} \\]`, "add_equation");
    print_equation("\\[ \\Delta = {b^2 - 4 \\cdot a \\cdot c }\\]", "delta_ex")
    print_equation(`\\[ \\Delta = {${b.value}^2 - 4 \\cdot ${a.value} \\cdot ${c.value}} \\]`,"add_delta")
    print_equation(`\\[ \\Delta = ${delta}\\]`,"delta_solved");
}

function full_sub(){
    how_to();
    var full_bhaskara = document.getElementById("result_container") 
    full_bhaskara.insertAdjacentElement("afterend", "<p></p>");
}
