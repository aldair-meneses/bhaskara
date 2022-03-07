import { non_root, two_roots } from "./equations.js"
export { more_info, how_to, drag, equation }

function more_info(){
    let guide_button = document.querySelector('#guide_btn')
    let help = document.querySelector('#guide_container')
    let close_info = document.querySelector('#close_btn')
    guide_button.addEventListener("click", ()=> {
    help.classList.add("show");
});

close_info.addEventListener("click", ()=>{
    help.classList.remove("show");
});

help.addEventListener("click", (event)=>{
    if (event.target == help) {
        help.classList.remove("show");
    }
});

}

function how_to(how){
    let window_result = document.querySelector('#window_result');
    window_result.style.display = ("none")
    let how_to_half = document.querySelectorAll('.half');
    for (how of how_to_half){
        how.style.display = ("block");
    }
    if (a.value == ''){
        window_result.style.display = ("block") 
    }
}

function drag(){
    const drag =  document.getElementById("drag_off");
    drag.draggable = false;
}

function equation(delta, sqrt_delta){
    return (delta < 0) ? non_root(delta)  
        : (a.value == '') ? how_to()
        : two_roots(delta,sqrt_delta);
}

    
