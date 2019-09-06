import React, { Component } from "react";
import Input from "./comman/input";
import Joi from "joi-browser";
import Form from "./comman/Form";
class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: { username: "", password: "" }
  };
  schema = {
    username: Joi.string().required(),
    password: Joi.string().required()
  };

  doSubmit = () => {
    console.log("submit");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={data.username}
            label="نام کاربری"
            onChange={this.handleChange}
            errors={errors.username}
          />
          <Input
            name="password"
            value={data.password}
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
              value={data.password}
              class="form-control"
              id="password"
              placeholder="Password"
            />
          </div> */}
          {/* <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div> */}
          <button
            disabled={this.validate()}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
