export {non_root, roots}

function print_equation(equation, id) {
    const math = document.getElementById(`${id}`);
    math.innerHTML = (equation);
}

function generate_doc(sub_txt,id){
    let ex = document.getElementById(`${id}`);
    ex.innerHTML = (sub_txt);
}    

function non_root(delta, tags){
    let tag_roots = document.querySelectorAll('.root-tag');
        for (tags of tag_roots){
            tags.display = ("none")
        }

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

function roots(delta,x1,x2){
    const formula_ex = (`\\[ x = {- b \\pm \\sqrt{\\Delta} \\over 2 \\cdot a}  \\quad \\] `);
    const formula_ex_values = (`\\[ x = {- ${b.value} \\pm \\sqrt{${delta}} \\over 2 \\cdot ${a.value}} \\quad \\]`);
    const add_formula = (`\\[ x = {- ${b.value} \\pm {${Math.sqrt(delta)}} \\over 2 \\cdot ${a.value}} \\]`);
    const first_root = (`\\[ x' = {-${b.value} + {${Math.sqrt(delta)}} \\over 2 \\cdot ${a.value}} \\qquad  \\]`);
    const first_root_sol = (`\\[x' = { -${(- b.value + Math.sqrt(delta))} \\over ${2 * a.value}} \\qquad \\ x' = ${x1} \\]`);
    const second_root = (`\\[ x'' = {-${b.value} - {${Math.sqrt(delta)}} \\over 2 \\cdot ${a.value}} \\qquad  \\]`)
    const second_root_sol = (`\\[x'' = { ${(- b.value - Math.sqrt(delta))} \\over ${2 * a.value}} \\qquad \\ x'' = ${x2} \\]`)

    print_equation("\\[x =  {-b \\pm \\sqrt { b^2 -4 \\cdot a \\cdot c } \\over 2 \\cdot a}  \\]","formula");
    print_equation("\\[ax^2 + bx + c = 0 \\]", "equation_ex");    
    print_equation(`\\[ a = ${a.value} \\quad b = ${b.value} \\quad  c = ${c.value} \\]`, "add_equation");
    print_equation("\\[ \\Delta = {b^2 - 4 \\cdot a \\cdot c }\\]", "delta_ex");
    print_equation(`\\[ \\Delta = {${b.value}^2 - 4 \\cdot ${a.value} \\cdot ${c.value}} \\]`,"add_delta");
    print_equation(`\\[ \\Delta = ${delta}\\]`,"delta_solved");
    print_equation(`${formula_ex + formula_ex_values}`, "add_formula_ex");
    print_equation(add_formula, "add_formula");
    print_equation(`${first_root + first_root_sol}`, "root")
    print_equation(`${second_root + second_root_sol}`, "second_root")

    generate_doc("Fórmula", "formula_ex");
    generate_doc("Equação do segundo do segundo grau","equation_sub");
    generate_doc("Substituindo os valores na equação","add_equation_sub");
    generate_doc("discriminante (Delta)", "delta_sub");
    generate_doc("Calculando discriminante (Delta)", 'add_delta_sub');
    generate_doc("Substituindo os valores na fórmula", 'add_formula_ex_sub');
    generate_doc("Calculando Raízes", "roots_ex")
    MathJax.typeset()
}