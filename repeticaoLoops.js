// O loop For
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//  O for tem três partes separadas por ponto e virgula: onde
// começa, até quando repete e o que muda a cada volta. É o loop
// certo quando você já sabe quantas vezes quer repetir.

// O loop While 
 let tentativas = 0; 
 while (tentativas< 3){
    console.log("Tentando...");
    tentativas++;
 }
//  O while repete enquanto uma condição continuar verdadeira, sem
// um contador fixo de antemao. E a escolha certa quando voce não
// sabe exatamente quantas voltas vai precisar.

// QUAL USAR? 
// Sabe quantas vezes repetir? Usa for. Depende de uma condição
// que só muda durante a execução, tipo esperar um clique ou uma
// resposta? Usa while. Os dois fazem a mesma coisa por baixo; a
// diferença é só o controle.

// REPETINDO UM ARRAY

let frutas = ["maçã", "banana", "uva"];
  for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
  }

// frutas.length da o tamanho do array, então o loop sabe
// exatamente onde parar. frutas[i] pega o item da posição i a cada
// volta. Essa combinação é uma das coisas mais usadas em
// JavaScript.

let numeros = [4, 8, 1, 6, 3];
let soma = 0; 
let maioresQue10 = 0;  //Variável criada fora do loop para guardar a contagem


 for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i];
    if (numeros[i] > 10){
        maioresQue10++; // Soma +1 sempre que o número atual for maior que 10
    }

 } 

     console.log("Soma total: " + soma);
     console.log("Números maiores que 10: " + maioresQue10); //Mostra o resultado final