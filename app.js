window.addEventListener('load', ()=> {
    let imgs = document.querySelector('#drag_off');
        imgs.draggable = false;
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
const C = document.querySelector('#c');
const calc = document.querySelector('#calc');
const window_txt = document.querySelector('#window_result');

function stop_bhaskara(){
    let how_to = document.querySelectorAll('#how_to_calc');
        for (calculus_info of how_to){
            calculus_info.style.display = ('block');
        }
}

function bhaskara_full(){
    let full_how_to = document.querySelectorAll('.window-guide');
    for (full_calculus of full_how_to){
        full_calculus.style.display = ('block')
    }
}

function bhaskara(){
    window_txt.remove();
    const a = ax.value;
    const b = bx.value;
    const c = C.value;

    const delta = b * b - 4 * a * c;

    if (a == ''){
        print_equation('O valor de A não pode ser nulo ou zero.', 'error')
    }
    else if (delta < 0){
        stop_bhaskara();
        print_equation('\\[x = {-b \\pm \\sqrt{ b^2 -4 \\cdot a \\cdot c} \\over 2 \\cdot a} \\]', 'bhaskara');
        print_equation(`\\[ a = ${a} \\quad b = ${b} \\quad  c = ${c} \\]`, 'equation');
        print_equation('\\[ ax² + bx + c \\]', 'eq_example');
        print_equation('\\[ \\Delta = b^2 - 4 \\cdot a \\cdot c\\]', 'delta_example');
        print_equation(`\\[ \\Delta = ${b}^2 - 4 \\cdot ${a} \\cdot ${c}\\]`, 'delta');
        print_equation(`\\[\\Delta = ${delta} \\]`,'delta_solved');
        print_equation('a equação não possui raizes reais', 'error')
    }

    else {
        bhaskara_full();
        const $x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const $x2 = (- b - Math.sqrt(delta)) / (2 * a);
        print_equation(`\\[x = {-b \\pm \\sqrt{ b^2 -4 \\cdot a \\cdot c} \\over 2 \\cdot a} \\]`, 'bhaskara');
        print_equation(`\\[ a = ${a} \\quad b = ${b} \\quad  c = ${c} \\]`, 'equation');
        print_equation(`\\[ ax² + bx + c \\]`, 'eq_example');
        print_equation(`\\[ \\Delta = b^2 - 4 \\cdot a \\cdot c\\]`, 'delta_example');
        print_equation(`\\[ \\Delta = ${b}^2 - 4 \\cdot ${a} \\cdot ${c}\\]`, 'delta');
        print_equation(`\\[\\Delta = ${delta} \\]`,'delta_solved');
        print_equation(`\\[ x = {-${b} \\pm \\sqrt{${delta} } \\over 2 \\cdot (${a})} \\]`, 'bhaskara_solve');
        print_equation(`\\[ x' = ${$x1} \\]`, 'x1');
        print_equation(`\\[ x'' =  ${$x2} \\]`, 'x2');
        }   
    MathJax.typeset();
};

function print_equation(equation, id) {
    // let header = document.getElementById(`${head}`)
    // header.innerHTML = (header_txt)
    let math = document.getElementById(`${id}`)
    math.innerHTML = (equation)
};

globalThis.addEventListener('click', (event)=>{
    window_txt.remove();    
    event.preventDefault();
    bhaskara();
});

