/* Sem essas três ferramentas, todo código vira uma bagunça
repetida. Função evita repetir lógica, array organiza listas, objeto
organiza informação relacionada. Juntas, formam o esqueleto de
qualquer programa maior. */

function saudar(nome) {
    return "Oi, " + nome;
}

// LISTA DE VALORES
/*Um array guarda vários valores numa ordem só, acessados por
posição: frutas[O] él'maçã'. É a estrutura certa pra qualquer coisa
que se pareça com uma lista: tarefas, produtos, nomes.*/

let frutas = ["maçã", "banana"];

// Agrupar infomações
// Um objeto junta informações relacionadas sob um nome só:
// pessoa.nome, pessoa.idade. Diferente do array, aqui o acesso é
// pelo nome da propriedade, não pela posição.

let pessoa = { nome: "Ana", idade: 25};

// atividade 
 function saudar(pessoa) {
    return "Oi, " + pessoa.nome + "!";
 }
 let alunos  = [
    { nome: "Ana", idade: 25},
    { nome: "Pedro", idade: 19},
    { nome: "João", idade: 20}
 ];
 for (let aluno of alunos){
    console.log(saudar(aluno));
 }