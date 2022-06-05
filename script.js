const pixelBoard = document.getElementById('pixel-board');
const primeiraCor = document.getElementById('primeira-cor');
const segundaCor = document.getElementById('segunda-cor');
const terceiraCor = document.getElementById('terceira-cor');
const quartaCor = document.getElementById('quarta-cor');
const clearBoard = document.getElementById('clear-board');
const pixel = document.getElementsByClassName('pixel');
const botaoCriarQuadro = document.getElementById('generate-board');
const input = document.querySelector('#board-size');

function criaQuadroPixels() {
  for (let index = 0; index < 5; index += 1) {
    for (let z = 0; z < 5; z += 1) {
      const quadrados = document.createElement('div');
      quadrados.className = 'pixel';
      pixelBoard.appendChild(quadrados);
    }
    const quebra = document.createElement('br');
    pixelBoard.appendChild(quebra);
  }
}
criaQuadroPixels();

function selecionaCor(event) {
  const elementoSelected = document.querySelector('.selected');
  elementoSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

primeiraCor.addEventListener('click', selecionaCor);
segundaCor.addEventListener('click', selecionaCor);
terceiraCor.addEventListener('click', selecionaCor);
quartaCor.addEventListener('click', selecionaCor);

function paintPixel(elemento) {
  const element = document.querySelector('.selected');
  const cssObj = window.getComputedStyle(element);
  const bgColor = cssObj.getPropertyValue('background-color');
  elemento.target.style.backgroundColor = bgColor;
}

pixelBoard.addEventListener('click', paintPixel);

function limpaTudo() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

clearBoard.addEventListener('click', limpaTudo);

function bloqueiaNumeros(event) {
  if (event.key === '-') {
    event.preventDefault();
  }
}

input.addEventListener('keypress', bloqueiaNumeros);

function criaQuadroDinamico() {
  let size = document.getElementById('board-size').value;
  pixelBoard.innerText = '';
  if (size < 5) {
    size = 5;
  }
  if (size > 50) {
    size = 50;
  }
  for (let index = 0; index < size; index += 1) {
    for (let z = 0; z < size; z += 1) {
      const quadrados = document.createElement('div');
      quadrados.className = 'pixel';
      pixelBoard.appendChild(quadrados);
    }
    const quebra = document.createElement('br');
    pixelBoard.appendChild(quebra);
  }
}

function tamanhoQuadro() {
  const teste = document.getElementById('board-size').value;
  if (!teste) {
    alert('Board inválido!');
  }
  criaQuadroDinamico();
}

botaoCriarQuadro.addEventListener('click', tamanhoQuadro);

function iniciarComCores() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const criaRgb = `rgb(${red}, ${green}, ${blue})`;
  const criaRgb2 = `rgb(${green}, ${blue}, ${red})`;
  const criaRgb3 = `rgb(${blue}, ${red}, ${green})`;
  segundaCor.style.backgroundColor = criaRgb;
  terceiraCor.style.backgroundColor = criaRgb2;
  quartaCor.style.backgroundColor = criaRgb3;
}

iniciarComCores();
