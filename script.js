const guide_button = document.querySelector('#guide_btn')
const guide = document.querySelector('#guide_page')
const close = document.querySelector('#close_btn')
const modal = document.querySelector('#modal_content')


function modal_show() {
    modal.style.display = "block"    
}

guide_button.addEventListener("click", modal_show )

function modal_close() {
    modal.style.display = "none"
}

close.addEventListener("click", modal_close)


const A  = document.getElementById("a");
const B = document.getElementById("b");
const C = document.getElementById("c");