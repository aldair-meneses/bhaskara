const btn_help = document.querySelector('#btn_help');
const help = document.getElementById('help_page');
const sec = document.getElementById('sec');

function close_btn(){
    help.className = 'help-off';
    sec.className = 'sec';

}

function modal_help() {   
    sec.className = 'sec-help'  
    help.className = 'help-page';
    close_help = document.getElementById('close_btn');
    close_help.addEventListener('click', close_btn); 
    
}   


btn_help.addEventListener('click', modal_help)

const A = document.getElementById('a');
const B = document.getElementById('b');
const C = document.getElementById('c');
const x1 = document.getElementById('X1');
const x2 = document.getElementById('X2');
const calc = document.querySelector('#form-btn');

function bhaskara() {
    const a = A.value;
    const b = B.value;
    const c = C.value;

    const delta = b ** 2 - 4 * a * c;
    
    if (a == '' || b == '' || c == '') {
        createMsg("Digite os valores de A, B e C.");
    }else if (delta < 0) {
        createMsg("Não possui raízes reais.");
        x1.value = '';
        x2.value = '';
    }else if(a == 0) {
        createMsg("O valor de A não pode ser 0.");
    }else {  
        const X1 = (-b + Math.sqrt(delta)) / (2 * a);
        const X2 = (-b - Math.sqrt(delta)) / (2 * a);
        x1.value = X1;
        x2.value = X2;  
        validate_number();
    }

}   
function validate_number(){
    const numbers = /^[-0-9]+$/;
    if (numbers.test(a.value + b.value + c.value) == false){
        x1.value = '';
        x2.value = '';
    }
    if (numbers.test(a.value) == false){
        createMsg("\nO Caractere digitado para A é inválido");
    }else if(numbers.test(b.value) == false){
        createMsg("\nO Caractere digitado para B é inválido")
    }else if(numbers.test(c.value) == false){
        createMsg("\nO Caractere digitado para C é inválido")
    }
}   
function createMsg(txt) {
    document.getElementById('warnings').innerHTML = (`<h1 id="temp">${txt}</h1>`);
    setTimeout ( function () {
        removeMsg();
    }, 3000);
};



function removeMsg() {
    const text = document.getElementById("temp");
    text.remove();
};

calc.addEventListener('click', function() {
    bhaskara();
}); 

