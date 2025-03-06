function getRandomInt(max) {
  // returns a random integer between 0 and max
  return Math.floor(Math.random() * max);
}

function generateCode(length) {
  const code = [];
  for (let i = 0; i < length; i++) {
    code.push(getRandomInt(10));
  }
  return code.join('');
}

console.log(generateCode(8)); // example output: 345678923
