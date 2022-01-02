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
  console.log(newBook);
  console.log(myLibrary);
};

addBookToLibrary("Harry Potter", "J.K. Rowling", "1024", "Yes");
addBookToLibrary("Percy Jackson", "Rick Riordan", "675", "No");

myLibrary.forEach((book) => {
  let newDiv = document.createElement("div");
  newDiv.className = "book";
  newDiv.setAttribute("id", "book");

  let checkboxDiv = document.createElement("div");
  checkboxDiv.className = "checkboxDiv";

  let library = document.getElementById("books");
  library.appendChild(newDiv);

  let index = myLibrary.indexOf(book);

  let title = document.createElement("h1");
  let author = document.createElement("h2");
  let pages = document.createElement("h2");

  let read = document.createElement("input");
  read.type = "checkbox";
  read.id = "readStatus" + index;
  read.className = "checkbox";

  let label = document.createElement("label");
  label.htmlFor = read.id;
  label.className = "checkbox";

  if (myLibrary[index].read === "Yes") {
    label.innerHTML = "Yes";
  } else {
    label.innerHTML = "No";
  }

  newDiv.appendChild(title);
  newDiv.appendChild(author);
  newDiv.appendChild(pages);
  newDiv.appendChild(checkboxDiv);
  checkboxDiv.appendChild(read);
  checkboxDiv.appendChild(label);

  title.innerHTML = myLibrary[index].title;
  author.innerHTML = myLibrary[index].author;
  pages.innerHTML = myLibrary[index].pages;
  read.innerHTML = myLibrary[index].read;
});
