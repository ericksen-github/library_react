import React, { Component } from "react";
import TopBar from "./topBar";
import Book from "./book";

class Library extends Component {
  render() {
    const { books, onDelete, onReadUpdate } = this.props;
    return (
      <div>
        <div id="overlay"></div>
        <TopBar />
        <div id="tableContainer">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Pages</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {books.map(book => (
                <Book
                  onDelete={onDelete}
                  book={book}
                  key={book.title}
                  onReadUpdate={onReadUpdate}
                ></Book>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Library;
