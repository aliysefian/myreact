import React, { Component } from "react";
import Input from "./comman/input";
import Joi from "joi-browser";
class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: { username: "", password: "" }
  };
  schema = {
    username: Joi.string().required(),
    password: Joi.string().required()
  };
  validate = () => {
    const res = Joi.validate(this.state.account, this.schema, {
      abortEarly: false
    });
    if (!res.error) {
      return null;
    }
    console.log("wwwwww", res);

    const errors = {};
    for (let item of res.error.details) {
      // console.log("rws", item);
      errors[item.path[0]] = item.message;
    }
    return errors;
  };
  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    console.log(errors);
    if (errors) return;
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
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
          <button
            disabled={this.validate()}
            type="submit"
            class="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
