//BUTTON VARIABLES
const addButton = document.getElementById("add"); //Add book button to show pop up form to add book to library
const confirmAdd = document.getElementById("confirmAdd"); //Confirm add button for form
const confirmCancel = document.getElementById("confirmCancel"); //Cancel button to get out of form
const addForm = document.getElementById("addForm");
const overlay = document.getElementById("overlay");

const form = document.getElementById("form");

//INPUT FORM VARIABLES
let bookTitle = document.getElementById("bookTitle");
let bookAuthor = document.getElementById("bookAuthor");
let bookPages = document.getElementById("bookPages");
let readYes = document.getElementById("dot-1");
let readNo = document.getElementById("dot-2");

confirmCancel.addEventListener("click", (event) => {
  addForm.style.zIndex = "4";
  overlay.style.opacity = "1";
  event.preventDefault();
  form.reset();
});

confirmAdd.addEventListener("click", (event) => {
  checkForm();
  event.preventDefault();
  form.reset();
});

const checkForm = () => {
  if (
    bookTitle.value == "" ||
    bookAuthor.value == "" ||
    bookPages.value == "" ||
    (readYes.value == "" && readNo.value == "")
  ) {
    alert("Please fill out book info");
  } else if (readYes.checked) {
    addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, "Yes");
    addForm.style.zIndex = "4";
    overlay.style.opacity = "1";
  } else {
    addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, "No");
    addForm.style.zIndex = "4";
    overlay.style.opacity = "1";
  }
};

addButton.addEventListener("click", () => {
  addForm.style.zIndex = "6";
  overlay.style.opacity = "0.3";
});

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const addBookToLibrary = (title, author, pages, read) => {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  renderScreen(newBook);
};

const renderScreen = (book) => {
  let library = document.getElementById("books");
  library.innerHTML = "";
  myLibrary.forEach((book) => {
    let newDiv = document.createElement("div");
    newDiv.className = "book";
    newDiv.setAttribute("id", "book");

    let library = document.getElementById("books");
    library.appendChild(newDiv);

    let index = myLibrary.indexOf(book);

    let title = document.createElement("h1");
    let author = document.createElement("h2");
    let pages = document.createElement("h2");

    let bookButtons = document.createElement("div");
    bookButtons.className = "bookButtons";

    let read = document.createElement("button");
    read.className = "read";

    let deleteBook = document.createElement("button");
    deleteBook.className = "deleteBook";

    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fa fa-trash";

    if (myLibrary[index].read === "Yes") {
      read.innerHTML = "Read";
    } else {
      read.innerHTML = "Not Read";
      read.style.backgroundColor = "#f44336";
    }

    read.addEventListener("click", function () {
      if (this.innerHTML == "Read") {
        this.innerHTML = "Not Read";
        this.style.backgroundColor = "#f44336";
      } else if (this.innerHTML == "Not Read") {
        this.innerHTML = "Read";
        this.style.backgroundColor = "#4caf50";
      }
    });

    deleteBook.addEventListener("click", function () {
      myLibrary.splice(index, 1);
      renderScreen();
    });

    newDiv.appendChild(title);
    newDiv.appendChild(author);
    newDiv.appendChild(pages);
    newDiv.appendChild(bookButtons);
    bookButtons.appendChild(read);
    bookButtons.appendChild(deleteBook);
    deleteBook.appendChild(deleteIcon);

    title.innerHTML = myLibrary[index].title;
    author.innerHTML = myLibrary[index].author;
    pages.innerHTML = myLibrary[index].pages + " pages";
  });
};
