const addButton = document.getElementById("add");

addButton.addEventListener("click", () => {
  console.log(myLibrary);
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
};

addBookToLibrary("Harry Potter", "J.K. Rowling", "1024", "Yes");
addBookToLibrary("Percy Jackson", "Rick Riordan", "675", "No");

const readStatus = () => {
  console.log("button working");
};

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

  let read = document.createElement("button");
  read.className = "read";
  //read.onclick = readStatus;
  read.addEventListener = ("click", () => readStatus());

  if (myLibrary[index].read === "Yes") {
    read.innerHTML = "Read";
  } else {
    read.innerHTML = "Not Read";
    read.style.backgroundColor = "#f44336";
  }

  newDiv.appendChild(title);
  newDiv.appendChild(author);
  newDiv.appendChild(pages);
  newDiv.appendChild(read);

  title.innerHTML = myLibrary[index].title;
  author.innerHTML = myLibrary[index].author;
  pages.innerHTML = myLibrary[index].pages;
});

// const readStatus = () => {
//   console.log("button working");
// };
