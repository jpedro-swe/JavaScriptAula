// Selecionando os elementos do HTML pelos seus IDs
const titulo = document.querySelector("#titulo");
const botao = document.querySelector("#botao");

// Reagindo ao clique
botao.addEventListener("click", () => {
    // Muda o texto
    titulo.textContent = "Welcome!";
    
    // Muda a cor do texto 
    titulo.style.color = "#ff0000";
});