const guide_button = document.querySelector('#guide_btn');
const guide = document.querySelector('#modal_content');
const close_guide = document.querySelector('#close_btn');
const container = document.querySelector('#head_container')

guide_button.addEventListener('click', (event)=> {
    guide.classList.add('show');
})

close_guide.addEventListener('click', ()=>{
    guide.classList.remove('show');
})

guide.addEventListener('click', function(event){
    if (event.target == guide) {
        guide.classList.remove('show');
    }
})

const ax = document.querySelector('#a')
const bx = document.querySelector('#b')
const C = document.querySelector('#c')
const x1 = document.querySelector('#x1')
const x2 = document.querySelector('#x2')
const calc = document.querySelector('#calc')

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
    x1.value = $x1;
    x2.value = $x2;

  print_equation(`\\[ x = \\frac{-${b} \\pm \\sqrt{${b}^{2} - 4\\cdot (${a}\\cdot ${c})} }{2\\cdot (${a}) } \\]`)    
//   print_equation(`\\[ ${a}x² + ${b}x + ${$c} = 0 \\]`)
    }
    
}

calc.addEventListener('click', bhaskara)

// print_equation('\\[x = {-b \pm \sqrt{b^2-4ac} \over 2a}\\]');


function print_equation(equation){
  const math = document.querySelector('#math_result');
  math.innerHTML = (equation);
  MathJax.typeset();
}