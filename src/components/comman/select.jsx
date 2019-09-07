import React, { Component } from "react";

const Select = ({ onChange, name, label, errors, data }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>

      <select
        onChange={onChange}
        id={name}
        name={name}
        className="custom-select"
      >
        <option selected>Open this select menu</option>
        {data.map(m => (
          <option key={m._id} value={m._id}>
            {m.name}
          </option>
        ))}
      </select>
      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default Select;
