document.getElementById('btn-aluno1').addEventListener('click', () => {

    const [val1, val2] = getValues();

    if (val1 === null) return; // Interrompe se os valores forem inválidos

    const resultado = (val1 + val2) / 2;

    displayResult(resultado);

});
