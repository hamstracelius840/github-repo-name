// Randomly generated JavaScript code for your school project
const numbers = [1, 2, 3, 4, 5];
const colors = ["red", "green", "blue"];

function getRandomNumber() {
  return Math.floor(Math.random() * numbers.length);
}

function getRandomColor() {
  return colors[getRandomNumber()];
}
