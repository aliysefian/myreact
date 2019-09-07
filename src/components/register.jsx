import React, { Component } from "react";
import Form from "./comman/Form";
import { register } from "../serviceWorker";
import Input from "./comman/input";
import Joi from "joi-browser";

class Register extends Form {
  state = {
    data: { email: "", password: "", name: "" },
    errors: { email: "", password: "", name: "" }
  };
  schema = {
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(5)
      .max(30)
      .required(),
    name: Joi.string().required()
  };

  doSubmit = () => {
    console.log("submit");
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email Address")}
          {this.renderInput("password", "Password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
