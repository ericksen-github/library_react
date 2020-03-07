import React, { Component } from "react";

class Book extends Component {
  render() {
    const { book, onDelete, onReadUpdate } = this.props;

    // correctly applies Read/Not Read status on book load
    let a, b;
    book.read === "Read" ? (a = "selected") : (b = "selected");

    return (
      <tr>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.pages}</td>
        <td className="status">
          <select onChange={() => onReadUpdate(this.props.book)}>
            <option selected={a}>Read</option>
            <option selected={b}>Not Read</option>
          </select>
        </td>
        <td className="removeOuter">
          <div className="removeButton" onClick={() => onDelete(book.title)}>
            Remove
          </div>
        </td>
      </tr>
    );
  }
}

export default Book;
