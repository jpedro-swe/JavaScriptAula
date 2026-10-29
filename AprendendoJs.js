const nome = "João P";
let idade = 20;
let maiorDeIdade; 
let cidadeAtual = "brasilia";
let temIngresso = true;

console.log(nome);
console.log(idade);
console.log(maiorDeIdade);
console.log(cidadeAtual);
console.log(temIngresso);

// Lógica e decisões 
// Se isso, então aquilo

if (idade >= 18) {
    console.log("Pode entrar");
} else {
    console.log("Não pode entrar");
}

// maiorIdade if else
    if (idade >= 18) {
    maiorDeIdade = true;
    console.log("A pessoa é maior de idade.");
} else {
    maiorDeIdade = false;
    console.log("A pessoa é menor de idade.");
}
// idade === 18 
// idade > 18
// idade <= 18 
/* === , >, <, >= e <= comparam dois valores e devolvem true ou
false. A pegadinha clássica :=== compara valor e tipo junto; == só
compara o valor e tenta converter o tipo sozinho. Por isso o
hábito certo é sempre usar ===. */

// JUNTANDO CONDIÇÕES 

 /* idade >= 18 && temIngresso // && os dois tem que ser verdadeiro
chovendo || feriado // basta uma ser verdadeira
! estaLogado // !  inverte o valor */

if (idade >= 18 && temIngresso){
    console.log("Entrada liberada");
} else {
    console.log("Entrada negada");
}

