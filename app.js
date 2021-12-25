const A = document.getElementById("a")
const B = document.getElementById("b")
const C = document.getElementById("c")
const $X1 = document.getElementById("X1")
const $X2 = document.getElementById("X2")
const calc = document.querySelector('button');

function bhaskara() {
    const a = A.value;
    const b = B.value;
    const c = C.value;

    const delta = b ** 2 - 4 * a * c;

    const X1 = (-b + Math.sqrt(delta)) / (2 * a);
    const X2 = (-b - Math.sqrt(delta)) / (2 * a);   
    $X1.value = X1
    $X2.value = X2
// não possui resultados reais 
}

calc.addEventListener('click', function () {    
    bhaskara();
}); 

