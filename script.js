const button = document.querySelector('#criar-carta');
const board = document.querySelector('#carta-gerada');

function createLetter(text) {
  const span = document.createElement('span');

  span.textContent = text;

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

button.addEventListener('click', generateLetters);
