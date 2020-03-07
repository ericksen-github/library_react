import React, { Component } from "react";

class NewBook extends Component {
  showForm = () => {
    document.getElementById("inputForm").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  };

  render() {
    return (
      <div id="newBookButton" onClick={() => this.showForm()}>
        Add Book
      </div>
    );
  }
}

export default NewBook;
