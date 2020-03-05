import React, { Component } from "react";

class TopBar extends Component {
  render() {
    return (
      <div>
        <div id="overlay"></div>
        <div id="topBar">
          <div className="title">My Library</div>
          <div className="subtitle">The Odin Project</div>
        </div>
        <div id="booksTitleLabel">Books</div>
      </div>
    );
  }
}

export default TopBar;
