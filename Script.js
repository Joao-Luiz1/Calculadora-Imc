function calcular() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const display = document.getElementById('resultado');

    if (peso !== '' && altura !== '') {
        const imc = (peso / (altura * altura)).toFixed(2);
        let classificacao = '';

        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
            display.style.color = '#5dade2'; // Azul
        } else if (imc < 25) {
            classificacao = 'Peso ideal (parabéns!)';
            display.style.color = '#2ecc71'; // Verde
        } else if (imc < 30) {
            classificacao = 'Levemente acima do peso';
            display.style.color = '#f1c40f'; // Amarelo
        } else if (imc < 35) {
            classificacao = 'Obesidade Grau I';
            display.style.color = '#e67e22'; // Laranja
        } else {
            classificacao = 'Alerta de Obesidade';
            display.style.color = '#e74c3c'; // Vermelho
        }

        display.innerHTML = `IMC: ${imc} <br> <span>${classificacao}</span>`;
    } else {
        alert("Por favor, preencha todos os campos!");
    }
}