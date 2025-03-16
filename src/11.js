  const getRandomNumber = () => Math.floor(Math.random() * 10);

  const getRandomWord = () => {
    const words = ["hello", "world", "javascript", "code"];
    return words[getRandomNumber()];
  };

  const getRandomSentence = () => {
    const sentence = `${getRandomWord()} is a ${getRandomNumber()} in the ${getRandomWord()}!`;
    return sentence;
  };