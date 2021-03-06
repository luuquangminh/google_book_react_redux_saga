
const request = window.indexedDB.open('booksCollection', 3);
let db = null;
request.onsuccess = (event) => {
  db = request.result;
};
request.onupgradeneeded = (event) => {
    // console.log(event.target)
  db = event.target.result;
  db.createObjectStore('books', {
    autoIncrement: true,
    keyPath: 'id',
  });
};
export function checkInCollection(bookId) {
  return new Promise((resolve, reject) => {
        //   const existedBook =  window.books.find((book) => book.id == bookId)
        //   resolve(!!existedBook)
    const transaction = db.transaction('books');
        // console.log(transaction);
    const objectstore = transaction.objectStore('books');
       // console.log(objectstore);
    const readRequest = objectstore.get(bookId);
    readRequest.onsuccess = (event) => {
            // console.log('error');

      resolve(!!event.target.result);
    };
    readRequest.onerror = (event) => {
      resolve(false);
    };
  });
}

const storedb = {

    // export ra 2 object
  addToCollection: (book) => {
    checkInCollection(book.id)
            .then((inCollection) => {
              console.log(book);
              if (!inCollection) {
                db.transaction('books', 'readwrite')
                        .objectStore('books').add(book);
              }
            });
  },
  removeFromCollection: (book) => {
    checkInCollection(book.id)
            .then((inCollection) => {
              if (inCollection) {
                db.transaction('books', 'readwrite').objectStore('books').delete(book.id);
              }
            });
  },
  loadBookCollection: () => new Promise((resolve, reject) => {
    const transaction = db.transaction('books');
            // console.log(transaction);
    const objectstore = transaction.objectStore('books');
           // console.log(objectstore);
    const readRequest = objectstore.getAll();
    readRequest.onsuccess = (event) => {
                // console.log('error');
      resolve(event.target.result);
    };
    readRequest.onerror = (event) => {
      resolve([]);
    };
  }),
};
export default storedb;
