function calculadora() {
    const operacao = prompt('Digite a operação desejada:\n 1) Soma (+)\n 2) Subtração (-)\n 3) Multiplicação (*)\n 4) Divisão (/)');

    switch (operacao) {
        
        case '1':
            soma();
            break;
        case '2':
            subtracao();
            break;
        case '3':
            multiplicacao();
            break;
        case '4':
            divisao();
            break;
        default:
            alert('Operação inválida!');
            break;
        }
}

function soma() {
    const numero1 = Number(prompt('Digite o primeiro número:'));
    const numero2 = Number(prompt('Digite o segundo número:'));
    const resultado = numero1 + numero2;
    alert(`O resultado da soma é: ${resultado}`);
}

function subtracao() {
    const numero1 = Number(prompt('Digite o primeiro número:'));
    const numero2 = Number(prompt('Digite o segundo número:'));
    const resultado = numero1 - numero2;
    alert(`O resultado da subtração é: ${resultado}`);
}

function multiplicacao() {
    const numero1 = Number(prompt('Digite o primeiro número:'));
    const numero2 = Number(prompt('Digite o segundo número:'));
    const resultado = numero1 * numero2;
    alert(`O resultado da multiplicação é: ${resultado}`);
}

function divisao() {
    const numero1 = Number(prompt('Digite o primeiro número:'));
    const numero2 = Number(prompt('Digite o segundo número:'));
    const resultado = numero1 / numero2;
    alert(`O resultado da divisão é: ${resultado}`);
}

calculadora();