import React, { Component } from "react";
import Input from "./comman/input";
class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: { username: "", password: "" }
  };
  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "")
      errors.username = "username is required";
    if (account.password.trim() === "")
      errors.password = "password is required";
    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    console.log(errors);
    if (errors) return;
  };
  validateProperty = ({ name, value }) => {
    console.log(name, value);
    if (name === "username") {
      if (value.trim() === "") {
        return "username is required";
      }
    }
    if (name === "password") {
      if (value.trim() === "") {
        return "password is required";
      }
    }
    // return null;
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };

    const errorMessage = this.validateProperty(input);
    console.log(errorMessage);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account: account, errors: errors });
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="نام کاربری"
            onChange={this.handleChange}
            errors={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            label="password"
            onChange={this.handleChange}
            errors={errors.password}
          />
          {/* <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={this.handleChange}
              name="password"
              value={account.password}
              class="form-control"
              id="password"
              placeholder="Password"
            />
          </div> */}
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
