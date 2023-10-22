// FUNÇÕES

// Funções são blocos de código que podem ser executados e reutilizados. Elas permitem que você agrupe um conjunto de instruções para executar uma tarefa específica.

// Uma função pode ou não receber parâmetros e retornar um resultado.

// Para criar uma função, você deve usar a palavra-chave function, seguida pelo nome da função e os parênteses ().

function funcao(){
    console.log('Olá mundo!');
}

// Para executar uma função, você deve usar o nome da função seguido pelos parênteses (). <CHAMADA DE FUNÇÃO>

funcao();

// Parâmetros

// Os parâmetros são valores que a função recebe para executar uma tarefa. Eles são opcionais, ou seja, uma função pode não receber parâmetros.

// Você pode definir mais de um parâmetro usando a vírgula para separá-los.

function saudacao(nome, idade){
    console.log(`Olá ${nome}, você tem ${idade} anos.`);
}

saudacao('João', 25);