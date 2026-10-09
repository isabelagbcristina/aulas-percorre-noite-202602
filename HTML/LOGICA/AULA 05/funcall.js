// Declaração de variáveis
let nome = "Thiago"
let soma = 5 + 5

// Exibição do valor armazenado das variáveis
console.log(nome);
console.log(soma);

// Estrutura de decisão
if (soma > 5){
    console.log("A soma é maior que 05")
}

else{
    console.log("A soma é menor que 05")
}

// Laço de repetição
for(let i = 0; i < 10; i ++){
    console.log("O valor de i é: " + i);
}

// Função se refere a uma lógica que é repetida mais de uma vez, porém diferente de um laço de repetição a FUNÇÃO é para ser INVOCADA quando o programador escolher, independente de um contador.
function somador(a, b) {
    return a + b 
}

// A função pode ser invocada para passar valor a uma variável, como no exemplo abaixo. Observe que A e B da criação da função foram sustituídos pelos valores a ser somados, assim como variáveis dda matemática
let total= somador (5, 4)
console.log(total);

let total2= somador (6, 7)
console.log(total2);

// A função também pode ser invocada dentro de outras funções ou métodos, como no exemplo abaixo, onde invocamos a função somador dentro do console.log
console.log(somador(15, 25))