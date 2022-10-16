function createpixelsBoardInitial() {
  const containerPixels = document.getElementById('pixel-board');
  for (let columnRow = 0; columnRow < 25; columnRow += 1) {
    let pixelColumnRow = document.createElement('div');
    pixelColumnRow.className = 'pixel';
    containerPixels.appendChild(pixelColumnRow);
  }
}

createpixelsBoardInitial();

let firstColor = document.querySelector('.firstColor');
let secondColor = document.querySelector('.secondColor');
let thirdColor = document.querySelector('.thirdColor');
let fourthColor = document.querySelector('.fourthColor');

paletteUpdate();

function selectColor(event) {
  let selectedElement = document.querySelector('.selected');
  selectedElement.classList.remove('selected');
  event.target.classList.add('selected');
}

firstColor.addEventListener('click', selectColor);
secondColor.addEventListener('click', selectColor);
thirdColor.addEventListener('click', selectColor);
fourthColor.addEventListener('click', selectColor);

function paintPixel() {
  let pixelDiv = document.querySelectorAll('.pixel');
  firstColor.style.backgroundColor = 'rgb(0,0,0)';
  for (let pixel of pixelDiv) {
    pixel.addEventListener('click', function (event) {
      let colorSelected = document.querySelector('.selected');
      event.target.style.backgroundColor = colorSelected.style.backgroundColor;
    });
  }
}

paintPixel();

function createInput() {
  let container = document.getElementById('options_input');
  let input = document.createElement('input');
  input.id = 'board-size';
  input.type = 'number';
  input.min = '1';
  input.placeholder = 'Insira os pixels';
  container.appendChild(input);
}

createInput();

function createButtonInput() {
  let container = document.getElementById('options_input');
  let buttonInput = document.createElement('button');
  buttonInput.id = 'generate-board';
  buttonInput.innerText = 'VQV';
  container.appendChild(buttonInput);
}

createButtonInput();

function newPixelsBoard() {
  let buttonInput = document.getElementById('generate-board');
  buttonInput.addEventListener('click', function () {
    let inputBoard = document.getElementById('board-size');
    let containerPixels = document.getElementById('pixel-board');

    if (inputBoard.value === '') {
      alert('Board inválido!');
      return;
    }

    hideOldPixelsBoard();
    inputBoardvalue();

    let sizeBoard = parseInt(inputBoard.value);
    for (let columnRow = 0; columnRow < (sizeBoard * sizeBoard); columnRow += 1) {
      let pixelsColumnRow = document.createElement('div');
      pixelsColumnRow.className = 'pixel';
      containerPixels.appendChild(pixelsColumnRow);
      containerPixels.display = 'grid';
    }

    repeateDiv();
    paintPixel();

    inputBoard.value = '';
  });
}

newPixelsBoard();

function createClearButton() {
  const container = document.getElementById('options_clear');
  const clearButton = document.createElement('button');
  clearButton.id = 'clear-board';
  clearButton.innerText = 'Limpar';
  container.appendChild(clearButton);
}

createClearButton();

function clearPixelsBoard() {
  let clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', function () {
    const pixelDiv = document.querySelectorAll('.pixel');
    for (let pixel of pixelDiv) {
      pixel.style = null;
    }
  });
}

clearPixelsBoard();

function repeateDiv() {
  let inputBoard = document.getElementById('board-size');
  let containerPixels = document.getElementById('pixel-board');
  for (let index = 0; index < inputBoard.value; index += 1) {
    containerPixels.style.gridTemplateRows += ' 40px';
    containerPixels.style.gridTemplateColumns += ' 40px';
  }
}

function hideOldPixelsBoard() {
  let containerPixels = document.getElementById('pixel-board');
  let piXelInicial = document.querySelectorAll('.pixel');
  for (let pixel of piXelInicial) {
    containerPixels.removeChild(pixel);
  }

  containerPixels.style.gridTemplateRows = '';
  containerPixels.style.gridTemplateColumns = '';
}

function inputBoardvalue() {
  let inputBoard = document.getElementById('board-size');

  if (inputBoard.value < 5) {
    inputBoard.value = 5;
  } else if (inputBoard.value > 50) {
    inputBoard.value = 50;
  }
}

function generateNewColorsRGB() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let rgb = [r, g, b];
  let newRGB = 'rgb' + '(' + rgb.join(',') + ')';
  return newRGB;
}

function paletteUpdate() {
  secondColor.style.backgroundColor = generateNewColorsRGB();
  thirdColor.style.backgroundColor = generateNewColorsRGB();
  fourthColor.style.backgroundColor = generateNewColorsRGB();
}

function createReloadButton() {
  const buttonReloadPalette = document.createElement('button');
  const container = document.getElementById('options_reloadPalette');
  buttonReloadPalette.id = 'reload-palette';
  buttonReloadPalette.innerText = 'Trocar Paleta';
  container.appendChild(buttonReloadPalette);
}

createReloadButton();

function changePalette() {
  const buttonReloadPalette = document.getElementById('reload-palette');
  buttonReloadPalette.addEventListener('click', function () {
    paletteUpdate();
  })
}

changePalette();
