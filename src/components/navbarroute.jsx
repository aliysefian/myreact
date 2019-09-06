import React, { Component } from "react";
import { Link } from "react-router-dom";
import Counter from "./counter";
class NavBarRoute extends Component {
  state = {};
  render() {
    return (
      <div>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link active" to={"/"}>
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/counter"}>
              Counter
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/login"}>
              Login
            </Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="#"
              tabIndex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBarRoute;
