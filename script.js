const guide_button = document.querySelector('#guide_btn');
const guide = document.querySelector('#modal_content');
const close_guide = document.querySelector('#close_btn');
const container = document.querySelector('#head_container')

<<<<<<< HEAD
=======

>>>>>>> e05b6b46be04a5fd700b4877d3cb323495f244c2
guide_button.addEventListener('click', (event)=> {
    guide.classList.add('show');
    if (event.target == guide){
        guide.classList.remove('show')
    }
})

close_guide.addEventListener('click', ()=>{
    guide.classList.remove('show');
})

<<<<<<< HEAD
=======

>>>>>>> e05b6b46be04a5fd700b4877d3cb323495f244c2
// guide.addEventListener('click', function(event){
//     if (event.target == guide) {
//         guide.classList.remove('show');
//     }
// })

const a = document.querySelector('#a')
const b = document.querySelector('#b')
const c = document.querySelector('#c')
const x1 = document.querySelector('#x1')
const x2 = document.querySelector('#x2')
const calc = document.querySelector('#calc')

function bhaskara(){
    const $a = a.value;
    const $b = b.value;
    const $c = c.value;

    const delta = $b * $b - 4 * $a * $c;

    const $x1 = (-$b + Math.sqrt(delta)) / (2 * $a);
    const $x2 = (- $b - Math.sqrt(delta)) / (2 * $a);
    x1.value = $x1;
    x2.value = $x2;
    createTxT('O resultado é');
}

calc.addEventListener('click', bhaskara)

function createTxT(txt){
    document.querySelector('#txt_result').innerHTML = (`${txt}`)
    
}