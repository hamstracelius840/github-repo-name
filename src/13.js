// Generated code using a random algorithm
function getRandomCode() {
  const codes = [
    'abcdefghijklmnopqrstuvwxyz',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    '0123456789'
  ];
  let code = '';
  for (let i = 0; i < 10; i++) {
    const index = Math.floor(Math.random() * codes.length);
    code += codes[index].charAt(Math.floor(Math.random() * codes[index].length));
  }
  return code;
}
