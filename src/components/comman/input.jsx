import React, { Component } from "react";
const Input = ({ onChange, name, label, value, errors, type }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        className="form-control"
        id={name}
        name={name}
        placeholder={"Enter " + name}
      />
      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default Input;
