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

function generateLetters() {
  const inputText = document.querySelector('#carta-texto').value;
  const texts = inputText.split(' ');

  resetBoard();

  for (let index = 0; index < texts.length; index += 1) {
    const word = texts[index];
    const span = createLetter(word);

    board.appendChild(span);
  }
}

button.addEventListener('click', generateLetters);
