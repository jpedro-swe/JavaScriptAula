let contador = 0;


const valor = document.getElementById('valor');
const diminuir = document.getElementById('diminuir');
const aumentar = document.getElementById('aumentar');
const zerar = document.getElementById('zerar');

function atualizarTela() {
    valor.textContent = contador;
}


aumentar.addEventListener('click', () => {
    contador++;
    atualizarTela();
});

diminuir.addEventListener('click', () => {
    contador--;
    atualizarTela();
});

zerar.addEventListener('click', () => {
    contador = 0;
    atualizarTela();
});