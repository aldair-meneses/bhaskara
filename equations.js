export {non_root, two_roots}


function print_equation(equation, id) {
    const math = document.getElementById(`${id}`);
    math.innerHTML = (equation);
}

function generate_doc(sub_txt,id){
    let ex = document.getElementById(`${id}`);
    ex.innerHTML = (sub_txt);
}

function non_root(delta){
    print_equation("\\[x =  {-b \\pm \\sqrt { b^2 -4 \\cdot a \\cdot c } \\over 2 \\cdot a}  \\]","formula");
    print_equation("\\[ax^2 + bx + c = 0 \\]", "equation_ex");    
    print_equation(`\\[ a = ${a.value} \\quad b = ${b.value} \\quad  c = ${c.value} \\]`, "add_equation");
    print_equation("\\[ \\Delta = {b^2 - 4 \\cdot a \\cdot c }\\]", "delta_ex");
    print_equation(`\\[ \\Delta = {${b.value}^2 - 4 \\cdot ${a.value} \\cdot ${c.value}} \\]`,"add_delta")
    print_equation(`\\[ \\Delta = ${delta}\\]`,"delta_solved")
    generate_doc("Fórmula", "formula_ex");
    generate_doc("Equação do segundo do segundo grau","equation_sub");
    generate_doc("Substituindo os valores na equação","add_equation_sub");
    generate_doc("discriminante (Delta)", "delta_sub");
    generate_doc("Calculando discriminante (Delta)", 'add_delta_sub');
}

function two_roots(delta, sqrt_delta){
    print_equation("\\[x =  {-b \\pm \\sqrt { b^2 -4 \\cdot a \\cdot c } \\over 2 \\cdot a}  \\]","formula");
    print_equation("\\[ax^2 + bx + c = 0 \\]", "equation_ex");    
    print_equation(`\\[ a = ${a.value} \\quad b = ${b.value} \\quad  c = ${c.value} \\]`, "add_equation");
    print_equation("\\[ \\Delta = {b^2 - 4 \\cdot a \\cdot c }\\]", "delta_ex");
    print_equation(`\\[ \\Delta = {${b.value}^2 - 4 \\cdot ${a.value} \\cdot ${c.value}} \\]`,"add_delta");
    print_equation(`\\[ \\Delta = ${delta}\\]`,"delta_solved");
    print_equation(`\\[ x = {- b \\pm \\sqrt{\\Delta} \\over 2 \\cdot a} \\] `, 'add_formula_ex');
    print_equation(`\\[ x = {- ${b.value} \\pm \\sqrt{${delta}} \\over 2 \\cdot ${a.value}} \\]`, 'add_formula_ex2');
    print_equation(`\\[ x = {- ${b.value} \\pm \\sqrt{${sqrt_delta}} \\over 2 \\cdot ${a.value}} \\]`, 'add_formula');
    generate_doc("Fórmula", "formula_ex");
    generate_doc("Equação do segundo do segundo grau","equation_sub");
    generate_doc("Substituindo os valores na equação","add_equation_sub");
    generate_doc("discriminante (Delta)", "delta_sub");
    generate_doc("Calculando discriminante (Delta)", 'add_delta_sub');
    generate_doc("Substituindo os valores na fórmula", 'add_formula_ex_sub');
}