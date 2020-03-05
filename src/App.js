import React, { Component } from "react";
import Library from "./components/library";
import NewBook from "./components/newBook";
import Form from "./components/form";
import { localStorageFunctions } from "./components/localstorage";

class App extends Component {
  constructor() {
    super();
    if (
      localStorageFunctions.storageAvailable("localStorage") &&
      localStorage.getItem("savedLibrary")
    ) {
      this.state = { books: JSON.parse(localStorage.getItem("savedLibrary")) };
    } else {
      this.state = {
        books: [
          { title: "1984", author: "George Orwell", pages: 300, read: "Read" },
          {
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            pages: 200,
            read: "Read"
          },
          {
            title: "The Martian",
            author: "Andy Weir",
            pages: 100,
            read: "Read"
          },
          {
            title: "Neuromancer",
            author: "William Gibson",
            pages: 500,
            read: "Not Read"
          }
        ]
      };
    }
  }

  handleReadUpdate = book => {
    const books = this.state.books;

    for (const b of books) {
      if (b.title === book.title) {
        if (b.read === "Read") {
          b.read = "Not Read";
        } else {
          b.read = "Read";
        }
      }
    }

    this.setState({ books: books });
    this.handleStorage(books);
  };

  handleDelete = bookTitle => {
    const books = this.state.books.filter(book => book.title !== bookTitle);
    this.setState({ books: books });
    this.handleStorage(books);
  };

  handleNewBook = newBook => {
    let books = this.state.books;
    books.push(newBook);
    this.setState({ books: books });
    this.handleStorage(books);
  };

  handleStorage = books => {
    if (localStorageFunctions.storageAvailable("localStorage")) {
      localStorage.setItem("savedLibrary", JSON.stringify(books));
    }
  };

  render() {
    return (
      <div className="App">
        <Library
          books={this.state.books}
          onDelete={this.handleDelete}
          onReadUpdate={this.handleReadUpdate}
        />
        <NewBook />
        <Form onNewBook={this.handleNewBook} />
      </div>
    );
  }
}

export default App;
