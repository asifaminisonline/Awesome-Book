//book class: Represents a book
class Book{
    constructor(title,author,){
        this.title=title;
        this.author=author;
        this.isbn=Math.random();
    }
}


//UI class: handle UI tasks

class UI {
    static displayBooks() {
    const books= Store.getBooks();
    books.forEach((book) => UI.addBookToList(book))
    }
static addBookToList(book) {
    const list= document.querySelector('#book-list');
    const row=document.createElement('tr-d');
   row.innerHTML=`
   <th>${book.title}</th><br>
   <th>${book.author}</th><br>
   <th><a href="#"><button class="delete">Remove</button></a></th><br>
   <hr class="hr-w" style="width:175px">
   ` 
   list.appendChild(row)
} 
static deleteBook(el){
    if(el.classList.contains('delete')){
        el.parentElement.parentElement.remove();
    }
}
}

//Store class: Handles storage

class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem('books')===null){
        books=[];
        }else{
        books=  JSON.parse(localStorage.getItem('books'));
    }
     return books;
    }
static addBook(book) {
const books = Store.getBooks();
books.push(book);
localStorage.setItem('books', JSON.stringify(books));
    }

static removeBook(isbn){
        const books=Store.getBooks();
        books.forEach((book ,index)=>{
if(book.isbn === book.isbn){
books.splice(index, 1)
}
        }); 
localStorage.setItem('books',JSON.stringify(books));
        }
    }




//remove book from store

 