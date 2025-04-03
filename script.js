const sobreImg = document.getElementById('sobreImg');
const cartaDiv = document.getElementById('cartaDiv');

sobreImg.addEventListener('click', () => {
    sobreImg.src = 'sobre_abierto.png';
    cartaDiv.style.display = 'block';
});