import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };
  validate = () => {
    const res = Joi.validate(this.state.data, this.schema, {
      abortEarly: false
    });
    if (!res.error) {
      return null;
    }

    const errors = {};
    for (let item of res.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };

    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data: data, errors: errors });
  };
  renderButton(label) {
    return (
      <button
        disabled={this.validate()}
        type="submit"
        className="btn btn-primary"
      >
        {label}
      </button>
    );
  }
  renderSelect = (name, label, data) => {
    const { errors } = this.state;
    return (
      // <select class="custom-select">
      //   <option selected>Open this select menu</option>
      //   {dt.map(m => (
      //     <option value={m._id}>{m.name}</option>
      //   ))}
      //   {/* <option value="2">Two</option>
      //   <option value="3">Three</option> */}
      // </select>
      <Select
        name={name}
        label={label}
        data={data}
        onChange={this.handleChange}
        errors={errors[name]}
      />
    );
  };
  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        errors={errors[name]}
      />
    );
  }
}

export default Form;
