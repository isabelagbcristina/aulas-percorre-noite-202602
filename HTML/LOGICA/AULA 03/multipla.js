// Avaliador de entregas

//  Para estruturar decisões no código utilizamos a família if else.
// if = se
// else = senão
// else if = senão se 
// O IF pede uma condição e se ela for atendida, execua o código que estpa entre {}.
// Já o ELSEserve para atender os casos que não conteplam as condições anteriroes.
// Se tivermos MAIS de uma condição, como no exemplo abaixo, é necessário utilizar o ELSE IF, que nega o IF anterior e propõe um nova condição.
// Por exmeplo, se não for not 05, mas for nota 04 o programa escrever "melhoras" na tela

let nota = 1

if (nota == 5) {
    console.log("AURA!⭐");
}
else if (nota == 4) {
    console.log("MELHORAS!✨")
}
else if (nota == 3) {
    console.log("Estava bem embalado. 🎁")
}
else if (nota == 2){
    console.log("Minha vó é melhor que você. 👳🏻‍♀️")
}
else if (nota == 1){
    console.log("Vai trabalhar de CLT pelo resto da eternidade... 🏴‍☠️")
}
else {
    console.log("INSIRA UMA NOTA VÁLIDA DE 01 A 05!!"); 
}