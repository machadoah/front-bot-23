// O que são vetores ou arrays?

// como declarar um array

let array = ['string', 1, true, [1, 2, 3], {nome: 'Antonio'}];

console.log(array);

// Manipulando arrays

/*

    a) forEach() - percorre o array e executa uma função para cada elemento

    b) push() - adiciona um elemento no final do array

    c) pop() - remove o último elemento do array

    d) shift() - remove o primeiro elemento do array

    e) unshift() - adiciona um elemento no início do array

    f) indexOf() - retorna o índice de um elemento no array

    g) splice() - remove ou adiciona um elemento em uma determinada posição

*/

// forEach()

array.forEach(function(elemento, indice) {
    console.log(elemento, indice);
});

// push()

array.push('novo elemento');

console.log(array);

// pop()

array.pop();

console.log(array);

// shift()

array.shift();

console.log(array);

// unshift()

array.unshift('novo elemento');

console.log(array);

// indexOf()

console.log(array.indexOf(true));

// splice()

array.splice(0, 3);

console.log(array);

// O que são objetos?

// como declarar um objeto
let objeto = {string: 'string', numero: 1, booleano: true, array: [1, 2, 3], objetoInterno: {nome: 'Antonio'}};

console.log(objeto.objetoInterno.nome);

var string = objeto.string;

console.log(string);

// Desestruturação de objetos
var {string, numero } = objeto;

console.log(string, numero);
