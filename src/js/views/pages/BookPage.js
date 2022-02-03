import Book from '../../components/pages/book/Book';

const BookPage = {
  render: async () => {
    const view = `
      <div style="position: absolute; top: 50%; left: 50%; font-size: 64px; transform: translate(-50%, -50%);">
        Book
      </div>
    `;
    return view;
  },
  after_render: async () => {
    // eslint-disable-next-line no-new
    new Book();
  },
};

export default BookPage;
