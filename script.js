const button = document.querySelector('#criar-carta');
const board = document.querySelector('#carta-gerada');

function getRandomIndex(array) {
  const randomIndex = Math.floor(Math.random() * array.length);

  return randomIndex;
}

function addRandomClasses(span) {
  const style = ['newspaper', 'magazine1', 'magazine2'];
  const size = ['medium', 'big', 'reallybig'];
  const rotation = ['rotateleft', 'rotateright'];
  const inclination = ['skewleft', 'skewright'];
  const styleSheet = [style, size, rotation, inclination];

  for (let index = 0; index < styleSheet.length; index += 1) {
    const classes = styleSheet[index];
    const className = classes[getRandomIndex(classes)];

    span.classList.add(className);
  }
}

function createLetter(text) {
  const span = document.createElement('span');

  span.textContent = text;
  addRandomClasses(span);

  return span;
}

function resetBoard() {
  board.innerHTML = '';
}

function validateInput(input) {
  let isValidInput = true;

  if (input.length === 0) {
    board.innerHTML = 'Por favor, digite o conteúdo da carta.';
    isValidInput = false;
  }

  return isValidInput;
}

function generateLetters() {
  const inputText = document.querySelector('#carta-texto').value;
  // Trecho baseado no link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  const texts = inputText.split(' ').filter((value) => value !== '');
  const isInputEmpty = validateInput(texts);

  if (isInputEmpty) {
    resetBoard();

    for (let index = 0; index < texts.length; index += 1) {
      const word = texts[index];
      const span = createLetter(word);

      board.appendChild(span);
    }
  }
}

function resetClasses(element) {
  const span = element;

  span.className = '';
}

function changeLetters(event) {
  const element = event.target;

  if (element.localName === 'span') {
    resetClasses(element);
    addRandomClasses(element);
  }
}

button.addEventListener('click', generateLetters);
board.addEventListener('click', changeLetters);
