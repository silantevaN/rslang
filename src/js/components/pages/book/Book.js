import { getWords } from '../../API/API';

class Book {
  constructor() {
    console.log('Book');
    this.words = [];
    this.render();
  }

  async getWords(group, page) {
    this.words = await getWords(group, page);
  }

  async render() {
    this.words = await getWords(0, 0);
    console.log(this.words);
    const word = this.createWord();
    document.getElementById('root').appendChild(word);
  }

  createWord() {
    const word = document.createElement('div');
    word.style.position = 'absolute';
    word.style.top = '55%';
    word.style.left = '50%';
    word.style.transform = 'translateX(-50%)';
    word.innerHTML = this.words[0].word;
    return word;
  }
}

export default Book;
