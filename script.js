const guide_button = document.querySelector('#guide_btn');
const guide = document.querySelector('#modal_content');
const close_guide = document.querySelector('#close_btn');
const container = document.querySelector('#head_container')


guide_button.addEventListener('click', (event)=> {
    guide.classList.add('show');
    if (event.target == guide){
        guide.classList.remove('show')
    }
})

close_guide.addEventListener('click', ()=>{
    guide.classList.remove('show');
})


// guide.addEventListener('click', function(event){
//     if (event.target == guide) {
//         guide.classList.remove('show');
//     }
// })










// const A  = document.getElementById("a");
// const B = document.getElementById("b");
// const C = document.getElementById("c");