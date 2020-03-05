import React, { Component } from "react";

class Form extends Component {
  handleHideForm = () => {
    document.getElementById("inputForm").style.display = "none";
    document.getElementById("overlay").style.display = "none";

    document.getElementById("titleText").value = "";
    document.getElementById("authorText").value = "";
    document.getElementById("pagesText").value = "";
    document.getElementById("selectMenu").value = "Read";

    document.getElementById("titleText").style.border = "solid 1px black";
    document.getElementById("authorText").style.border = "solid 1px black";
    document.getElementById("pagesText").style.border = "solid 1px black";
  };

  makeNewBook = () => {
    const { onNewBook } = this.props;

    const title = document.getElementById("titleText").value;
    const author = document.getElementById("authorText").value;
    const pages = document.getElementById("pagesText").value;
    const a = document.getElementById("selectMenu");
    const status = a.options[a.selectedIndex].value;

    if (this.handleErrorChecking(title, author, pages) === false) {
      return;
    }

    const newBook = {
      title: title,
      author: author,
      pages: pages,
      read: status
    };

    onNewBook(newBook);
    this.handleHideForm();
  };

  handleErrorChecking(titleText, authorText, pagesText) {
    let checker = true;
    if (titleText === "" || titleText == null) {
      document.getElementById("titleText").style.border = "solid 1px red";
      checker = false;
    } else {
      document.getElementById("titleText").style.border = "solid 1px black";
    }
    if (authorText === "" || authorText == null) {
      document.getElementById("authorText").style.border = "solid 1px red";
      checker = false;
    } else {
      document.getElementById("authorText").style.border = "solid 1px black";
    }
    if (
      pagesText === "" ||
      pagesText == null ||
      pagesText <= 0 ||
      isNaN(pagesText)
    ) {
      document.getElementById("pagesText").style.border = "solid 1px red";
      checker = false;
    } else {
      document.getElementById("pagesText").style.border = "solid 1px black";
    }
    return checker;
  }

  render() {
    return (
      <div id="inputForm">
        <div id="formTitle">New Book</div>
        <div id="inputsContainer">
          <div className="formSubtitle">Title</div>
          <input type="text" id="titleText" />
          <div className="formSubtitle">Author</div>
          <input type="text" id="authorText" />
          <div className="formSubtitle">Pages</div>
          <input type="text" id="pagesText" />
          <div className="formSubtitle">Read Status</div>
          <select id="selectMenu">
            <option className="readText" id="readText">
              Read
            </option>
            <option className="notReadText" id="notReadText">
              Not Read
            </option>
          </select>
          <div id="formButtons">
            <div
              className="formButton"
              id="addBookButton"
              onClick={this.makeNewBook}
            >
              Add book to Library
            </div>
            <div
              className="formButton"
              id="cancelButton"
              onClick={() => this.handleHideForm()}
            >
              Cancel
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
