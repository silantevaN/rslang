export const getWords = async (group, page) => {
  const response = await fetch(`https://react-learnwords-example.herokuapp.com/words?group=${group}&page=${page}`);
  const words = await response.json();

  return words;
};

export const getWord = async (id) => {
  const response = await fetch(`https://react-learnwords-example.herokuapp.com/words/${id}`);
  const word = await response.json();

  return word;
};
