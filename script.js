
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  info = function() {
    return `${this.title} by ${this.author}, has ${pages} pages, read = ${this.read}`
  }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "no");
const savageSon = new Book("Savage Son", "Jack Carr", 400, "yes");
const onlyTheDead = new Book("Only The Dead", "Jack Carr", 350, "yes");
const redSkyMourning = new Book("Red Sky Mourning", "Jack Carr", 450, "yes");

const myLibrary = [theHobbit,savageSon,onlyTheDead,redSkyMourning];

function createBookCard(book) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  bookCard.id = myLibrary.indexOf(book);
  bookCard.innerHTML = 
  `
    <h2>${book.title}</h2>
    <p>By: ${book.author}</p>
    <p>Pages: ${book.pages}</p>
    <p>Read: ${book.read}</p>
  `;
  return bookCard;
}
myLibrary.forEach(book => {
  console.log(book.info());
});

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  return myLibrary;
}

let addBookButton = document.querySelector("#addBook"); 
addBookButton.addEventListener("click", () => {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").value;
  addBookToLibrary(title, author, pages, read);
  alert(myLibrary);
});