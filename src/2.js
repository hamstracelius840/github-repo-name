const fs = require('fs');
const path = require('path');

function getRandomCode() {
  let code = '';
  const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 5; i++) {
    code += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  }
  return code;
}

const code = getRandomCode();
console.log(code);