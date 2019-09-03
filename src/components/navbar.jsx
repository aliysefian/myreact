import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar{" "}
            <span className="badge badge-primary">{this.props.totalCount}</span>
          </a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
