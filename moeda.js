const calcular = document.getElementById('calcular');

function converterMoeda() {
    const cotacao = +document.getElementById('cotacao').value;
    const valorReal = +document.getElementById('valorReal').value;
    const resultado = document.getElementById('resultado');

    if (cotacao > 0 && valorReal > 0) {
        const valorConvertido = (valorReal / cotacao).toFixed(2);
        resultado.textContent = `R$ ${valorReal} em Dólares é $ ${valorConvertido}.`;
    } else {
        resultado.textContent = 'Por favor, preencha todos os campos corretamente!';
    }
}

calcular.addEventListener('click', converterMoeda);
