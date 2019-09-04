import React, { Component } from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Users from "./users";
import Admin from "./admin";
class AdminDashboard extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>admin dashboard</h1>

        <ul>
          <li>
            <Link to={"/admin/admin"}>Admin</Link>
          </li>
          <li>
            <Link to={"/admin/user"}>Users</Link>
          </li>
        </ul>
        <Route path="/admin/user" Component={Users} />
        <Route path="/admin/admin" Component={Admin} />
      </div>
    );
  }
}

export default AdminDashboard;
