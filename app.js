const A = document.getElementById('a')
const B = document.getElementById('b')
const C = document.getElementById("c")
const x1 = document.getElementById('X1')
const x2 = document.getElementById('X2')
const calc = document.querySelector('button');

function bhaskara() {
    const a = A.value;
    const b = B.value;
    const c = C.value;

    const delta = b ** 2 - 4 * a * c;
    
    if (a == '' || b == '' || c == '') {
        createMsg("Digite os valores de A, B e C.");
    }else if (delta < 0) {
        createMsg("Não possui raizes reais.");
    }else if(a == 0) {
        createMsg("O valor de A não pode ser 0.");
    } else {  
        const X1 = (-b + Math.sqrt(delta)) / (2 * a);
        const X2 = (-b - Math.sqrt(delta)) / (2 * a);
        x1.value = X1;
        x2.value = X2;
    }
}   
function createMsg(txt) {
    document.getElementById('warnings').innerHTML = (`<h1 id="temp">${txt}</h1>`);
    setTimeout ( function () {
        removeMsg();
    }, 2500);
   
}

function removeMsg() {
    const text = document.getElementById("temp")
    text.remove();
}


calc.addEventListener('click', function() {
    bhaskara();
}); 

