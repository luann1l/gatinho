// Criando os elementos do dom
const imgOlhos = document.getElementById('imgOlhos');
const imgLuz = document.getElementById('imgLuz');
const btnLigar = document.getElementById('btnLigar');
const btnDesligar = document.getElementById('btnDesligar');

//Respondendo eventos
btnLigar.addEventListener('click', () => {
    imgLuz.src = "./img/ligada.jpg";
    imgOlhos.src = "./img/beijaflor.gif";
});

btnDesligar.addEventListener('click', () => {
    imgLuz.src = "./img/desligada.jpg";
    imgOlhos.src = "./img/olhos.gif";
});
