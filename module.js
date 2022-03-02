function print_equation(equation, id) {
    let math = document.getElementById(`${id}`)
    math.innerHTML = (equation)
}

export {print_equation as PrintEquation};




