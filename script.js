const tenis1 = document.getElementById('tenis-1');
const tenis2 = document.getElementById('tenis-2');

const setaDireita = document.getElementById('direita');
const setaEsquerda = document.getElementById('esquerda');

setaEsquerda.addEventListener('click', () => {
    tenis1.style.left = '650px';
    tenis2.style.left = '-50px';
});

setaDireita.addEventListener('click', () => {
    tenis1.style.left = '-50px';
    tenis2.style.left = '-650px';
})