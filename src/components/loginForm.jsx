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
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
