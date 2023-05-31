/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// book class: Represents a book\r\n\r\nclass Book {\r\n  constructor(title, author) {\r\n    this.title = title;\r\n    this.author = author;\r\n    this.isbn = Math.random();\r\n  }\r\n}\r\n\r\n// Store class: Handles storage\r\n\r\nclass Store {\r\n  static getBooks() {\r\n    let books;\r\n    if (\r\n      localStorage.getItem('books') === undefined\r\n      || localStorage.getItem('books') === null\r\n      || localStorage.getItem('books') === 'null'\r\n    ) {\r\n      books = [];\r\n    } else {\r\n      books = JSON.parse(localStorage.getItem('books'));\r\n    }\r\n    return books;\r\n  }\r\n\r\n  static addBook(book) {\r\n    const books = Store.getBooks();\r\n    books.push(book);\r\n    localStorage.setItem('books', JSON.stringify(books));\r\n  }\r\n\r\n  static removeBook(isbn) {\r\n    const books = Store.getBooks();\r\n    // todo check  books object\r\n    books.forEach((book, index) => {\r\n      if (book.isbn.toString() === isbn) {\r\n        books.splice(index, 1);\r\n      }\r\n    });\r\n    localStorage.setItem('books', JSON.stringify(books));\r\n    // todo check  books object\r\n  }\r\n}\r\n// UI class: handle UI tasks\r\n\r\nclass UI {\r\n  static displayBooks() {\r\n    const books = Store.getBooks();\r\n    books.forEach((book) => UI.addBookToList(book));\r\n  }\r\n\r\n  static addBookToList(book) {\r\n    const list = document.querySelector('#book-list');\r\n    const row = document.createElement('tr');\r\n    row.innerHTML = `\r\n    <ul>\r\n   <li><td>${book.title}</td></li>\r\n   <li><td>${book.author}</td></li>\r\n   <li><td><a href=\"#\"><button class=\"delete\" data-title=\"${book.isbn}\">Remove</button></a></td></li>\r\n  </div>\r\n  </ul>\r\n   `;\r\n    list.appendChild(row);\r\n  }\r\n\r\n  static deleteBook(el) {\r\n    if (el.classList.contains('delete')) {\r\n      el.parentElement.parentElement.parentElement.remove();\r\n    }\r\n  }\r\n}\r\n\r\n// Event: Display Books\r\n\r\ndocument.addEventListener('DOMContentLoaded', UI.displayBooks);\r\n\r\n// Event: Add a book\r\n\r\ndocument.querySelector('#Book-form').addEventListener('submit', (e) => {\r\n  e.preventDefault();\r\n\r\n  // prevent actual submit\r\n  const title = document.querySelector('#title').value;\r\n  const author = document.querySelector('#author').value;\r\n  //\r\n  if (\r\n    title !== null\r\n    && title !== undefined\r\n    && title !== ''\r\n    && author !== null\r\n    && author !== undefined\r\n    && author !== ''\r\n  ) {\r\n    const book = new Book(title, author);\r\n    // Add Book to UI\r\n    // Add book to store\r\n    Store.addBook(book);\r\n\r\n    UI.addBookToList(book);\r\n  }\r\n});\r\n\r\n// Event: Remove a book\r\n\r\ndocument.querySelector('#book-list').addEventListener('click', (e) => {\r\n  const isbn = e.target.getAttribute('data-title');\r\n  Store.removeBook(isbn);\r\n  UI.deleteBook(e.target);\r\n});\r\n\r\nfunction showSec(section) {\r\n  const bookList = document.getElementById('list');\r\n  const bookForm = document.getElementById('add-book');\r\n  const conTact = document.getElementById('contact');\r\n\r\n  switch (section) {\r\n    case 'list':\r\n      if (bookList.classList.contains('d-none')) {\r\n        bookList.classList.remove('d-none');\r\n        bookForm.classList.add('d-none');\r\n        conTact.classList.add('d-none');\r\n      }\r\n      break;\r\n\r\n    case 'form':\r\n      if (bookForm.classList.contains('d-none')) {\r\n        bookForm.classList.remove('d-none');\r\n        bookList.classList.add('d-none');\r\n        conTact.classList.add('d-none');\r\n      }\r\n      break;\r\n\r\n    case 'contact':\r\n      if (conTact.classList.contains('d-none')) {\r\n        conTact.classList.remove('d-none');\r\n        bookForm.classList.add('d-none');\r\n        bookList.classList.add('d-none');\r\n      }\r\n      break;\r\n\r\n    default:\r\n      break;\r\n  }\r\n}\r\nshowSec();\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;