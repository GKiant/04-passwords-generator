const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

let passwordLengthEl = document.getElementById('set-password-length');
let generatePasswordEl = document.getElementById('generate-btn');
let firstButtonEl = document.getElementById('first-password');
let secondButtonEl = document.getElementById('second-password');
let errorEl = document.getElementById('error');

let passwordLength = 0;
let firstPassword = '';
let secondPassword = '';

const generatePassword = (password) => {
  password = '';
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
};

generatePasswordEl.addEventListener('click', () => {
  errorEl.textContent = '';
  if (passwordLengthEl.value > 2 && passwordLengthEl.value < 33) {
    passwordLength = passwordLengthEl.value;
    firstPassword = generatePassword(firstPassword);
    secondPassword = generatePassword(secondPassword);

    firstButtonEl.textContent = firstPassword;
    secondButtonEl.textContent = secondPassword;
  } else {
    errorEl.textContent = 'Length of the password is incorrect!';
  }
});

const copyText = (text) => {
  navigator.clipboard.writeText(text.textContent);
  alert('Password was saved to your clipboard.');
};
