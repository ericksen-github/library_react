import React, { Component } from "react";

// the My Library and Books labels at top of page
class TopBar extends Component {
  render() {
    return (
      <div>
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
