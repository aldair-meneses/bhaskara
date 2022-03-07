export {non_root}

function generate_doc(sub_txt,id){
    let ex = document.getElementById(`${id}`);
    ex.innerHTML = (sub_txt);
}

function non_root(){
    generate_doc("Fórmula", "formula_ex");
    generate_doc("Equação do segundo do segundo grau","equation_sub");
    generate_doc("Substituindo os valores na equação","add_equation_sub");
    generate_doc("discriminante (Delta)", "delta_sub");
    generate_doc("Calculando discriminante (Delta)", 'add_delta_sub');
}
