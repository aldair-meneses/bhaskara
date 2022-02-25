window.addEventListener('load', ()=> {
    let imgs = document.querySelector('#drag_off');
        imgs.draggable = false;
});

const close_guide = document.querySelector('#close_btn');
const guide_button = document.querySelector('#guide_btn');
const guide = document.querySelector('#guide_container');

guide_button.addEventListener('click', ()=> {
    guide.classList.add('show');
});

guide.addEventListener('click', (event)=>{
    if (event.target == guide) {
        guide.classList.remove('show');
    }
});

close_guide.addEventListener('click', ()=>{
    guide.classList.remove('show')
});



const ax = document.querySelector('#a')
const bx = document.querySelector('#b')
const C = document.querySelector('#c')
const calc = document.querySelector('#calc')
const window_txt = document.querySelector('#window_result')

function bhaskara(){
    const a = ax.value;
    const b = bx.value;
    const c = C.value;

    const delta = b * b - 4 * a * c;

    if (a == ''){
        print_equation('O valor de A não pode ser nulo ou zero.', 'error')
    }
    else{
    const $x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const $x2 = (- b - Math.sqrt(delta)) / (2 * a);
    window_txt.remove();
    print_equation(`\\[ \\Delta = b^2 - 4 \\cdot a \\cdot c\\]`, 'delta_example')
    print_equation(`\\[ ax² + bx + c \\]`, 'eq_example')
    print_equation(`\\[\\ ${a}² + ${b}x + c \\]`, 'equation')
    print_equation(`\\[ \\Delta = ${b}^2 - 4 \\cdot ${a} \\cdot ${c}\\]`, 'delta')

    }   
};

function print_equation(equation, id) {
    let math = document.getElementById(`${id}`)
    math.innerHTML = (equation)
    MathJax.typeset();
};



calc.addEventListener('click', (event)=>{
    let window_guide = document.querySelectorAll('.window-guide');
    for (guides of window_guide){
        guides.style.display = ('block')
    }

    event.preventDefault();
    bhaskara();
});

