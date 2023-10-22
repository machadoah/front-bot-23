// ESTRUTURA DE CONTROLE

var jogador1 = 2;
var jogador2 = 5;
var placar;

// IF, ELSE IF, ELSE

if (jogador1 >= 0 && jogador2 >= 0) {  

    if(jogador1 > jogador2){
        console.log('Jogador 1 está ganhando');
    } else if( jogador1 == jogador2){
        console.log('Jogador 1 e Jogador 2 estão empatados');
    } else {
        console.log('Jogador 2 está ganhando');
    }
}

// IF TERNÁRIO

var vencedor = jogador1 > jogador2 ? 'Jogador 1 está ganhando' : jogador2 > jogador1 ? 'Jogador 2 está ganhando' : 'Jogador 1 e Jogador 2 estão empatados';

console.log(vencedor);

// SWITCH

switch (vencedor) {
    case 'Jogador 1 está ganhando':
        console.log('O 1 é o melhor!!');
        break;
    case 'Jogador 2 está ganhando':
        console.log('O 2 é o melhor!!');
        break;
    default:
        console.log('Os dois são bons!!');
        break;
}

// ESTRUTURA DE REPETIÇÃO

// For

let array = [1, 2, 3, 4, 5];

let object = {
    nome: 'João',
    idade: 25,
    altura: 1.75
}

for (i in array) {
    console.log(`O indice ${i} é o ${array[i]}`);
}

for (i in object) {
    console.log(`O indice ${i} é o ${object[i]}`);
}

// For of

for (i of array) {
    console.log(`O valor do incie ${i} é o ${array[i]}`);
}

// com o for of não é possível percorrer objetos

// While

console.log('While');

let contador = 0;

while (contador < 10) {
    contador++;
    console.log(contador);
}

// Do While

console.log('Do While');

contador = 0;

do {
    contador++;
    console.log(contador);
} while (contador < 10);