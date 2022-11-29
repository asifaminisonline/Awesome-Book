// book class: Represents a book
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.isbn = Math.random();
  }
}
// Store class: Handles storage

class Store {
  static getBooks() {
    let books;
    if (
      localStorage.getItem('books') === undefined
      || localStorage.getItem('books') === null
      || localStorage.getItem('books') === 'null'
    ) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    // todo check  books object
    books.forEach((book, index) => {
      if (book.isbn.toString() === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
    // todo check  books object
  }
}
// UI class: handle UI tasks

class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr-d');
    row.innerHTML = `
   <th>${book.title}</th><br>
   <th>${book.author}</th><br>
   <th><a href="#"><button class="delete" data-title="${book.isbn}">Remove</button></a></th><br>
   <hr class="hr-w" style="width:175px">
   `;
    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }
}

// Event: Display Books

document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a book

document.querySelector('#Book-form').addEventListener('submit', (e) => {
  e.preventDefault();

  // prevent actual submit
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  //
  if (
    title !== null
    && title !== undefined
    && title !== ''
    && author !== null
    && author !== undefined
    && author !== ''
  ) {
    const book = new Book(title, author);
    // Add Book to UI
    // Add book to store
    Store.addBook(book);

    UI.addBookToList(book);
  }
});

// Event: Remove a book

document.querySelector('#book-list').addEventListener('click', (e) => {
  const isbn = e.target.getAttribute('data-title');
  Store.removeBook(isbn);
  UI.deleteBook(e.target);
});

// remove book from store
