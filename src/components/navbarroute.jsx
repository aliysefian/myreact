import React, { Component } from "react";
import { Link } from "react-router-dom";
import Counter from "./counter";
class NavBarRoute extends Component {
  state = {};
  render() {
    return (
      <div>
        <ul class="nav">
          <li class="nav-item">
            <Link className="nav-link active" to={"/"}>
              Movies
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to={"/counter"}>
              Counter
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to={"/login"}>
              Login
            </Link>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
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
