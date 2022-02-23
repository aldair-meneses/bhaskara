const imgs = document.querySelectorAll('#drag_off')

window.addEventListener('load', ()=> {
    for (let img of imgs){
        img.draggable = false;   
}
})

const close_guide = document.querySelector('#close_btn');
const guide_button = document.querySelector('#guide_btn');
const guide = document.querySelector('#guide_container');

guide_button.addEventListener('click', ()=> {
    guide.classList.add('show');
})

guide.addEventListener('click', (event)=>{
    if (event.target == guide) {
        guide.classList.remove('show');
    }
})

close_guide.addEventListener('click', ()=>{
    guide.classList.remove('show')
})

const ax = document.querySelector('#a')
const bx = document.querySelector('#b')
const C = document.querySelector('#c')
const calc = document.querySelector('#calc')
const result = document.querySelector('#result-container')

function bhaskara(){
    const a = ax.value;
    const b = bx.value;
    const c = C.value;

    const delta = b * b - 4 * a * c;

    if (a == ''){
        print_equation('O valor de A não pode ser nulo ou zero.')
    }
    else{
    const $x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const $x2 = (- b - Math.sqrt(delta)) / (2 * a);

    print_equation(`\\[ ${a}x² + ${b}x + ${c} = 0 \\]`);
    }   
}

function show_math_solution(){
    result.classList.add('show-result')
}

calc.addEventListener('click', (event)=>{
    event.preventDefault();
    bhaskara();
    show_math_solution();
})

function print_equation(equation){
  const math = document.querySelector('#result_modal');
  math.innerHTML = (equation);
  MathJax.typeset();
}
