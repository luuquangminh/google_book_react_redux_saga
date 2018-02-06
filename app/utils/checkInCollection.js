export default function checkInCollection(bookId) {
  return new Promise((resolve, reject) => {
    const existedBook = window.books.find((book) => book.id === bookId);
    resolve(!!existedBook);
  });
}
