import React, { Component } from "react";
const Input = ({ onChange, name, label, value, errors }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        type="text"
        class="form-control"
        id={name}
        name={name}
        placeholder={"Enter " + name}
      />
      {errors && <div class="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default Input;
