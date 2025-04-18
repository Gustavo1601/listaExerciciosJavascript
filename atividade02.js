document.getElementById('somaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const soma = numero1 + numero2;
    let resultado;

    if (soma > 20) {
        resultado = soma + 8;
    } else {
        resultado = soma - 5;
    }

    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
});