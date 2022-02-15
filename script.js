const guide_button = document.getElementById('guide_btn')
// const guide = document.querySelector('#guide_page')
const modal = document.getElementById('modal_content')
const close = document.getElementById('close_btn')
guide_button.addEventListener('click', ()=> {
    modal.classList.add('show');
})

close.addEventListener('click', ()=>{
    modal.classList.remove('show')
})

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }










// const A  = document.getElementById("a");
// const B = document.getElementById("b");
// const C = document.getElementById("c");