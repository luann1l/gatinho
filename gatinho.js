const botao = document.getElementById('Button');
const gato = document.getElementById('gatoImg');
const musica = document.getElementById('musica');

let ligado = false;

botao.addEventListener('click', () => {
    if (!ligado) {
        musica.play();
        gato.src = './img/cat-cat-meme.gif'; // Gato dançando
        botao.textContent = 'Desligar';
        ligado = true;
    } else {
        musica.pause();
        musica.currentTime = 0;
        gato.src = 'https://media.istockphoto.com/id/1395622146/pt/foto/blue-cat-puppy.jpg?s=612x612&w=0&k=20&c=kow1QldVJ-4D5VEv8l1qc8OiAazr7C_QjzNAPZ_VMuQ='; // Gato sentado
        botao.textContent = 'Ligar';
        ligado = false;
    }
});