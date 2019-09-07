import React, { Component } from "react";
import Form from "./comman/Form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";
class MovieCreate extends Form {
  state = {
    data: { title: "", genresId: "", numInStock: "", rate: "" },
    errors: { title: "", genres: "", numInStock: "", rate: "" },
    genres: []
  };
  componentDidMount() {
    const ss = getGenres();
    this.setState({ genres: ss });
    console.log(this.genres);
  }
  schema = {
    // email: Joi.string()
    //   .email()
    //   .required(),
    // password: Joi.string()
    //   .min(5)
    //   .max(30)
    //   .required(),
    title: Joi.string().required(),
    genresId: Joi.string().required(),
    numInStock: Joi.number()
      .min(0)
      .max(100)
      .required(),
    rate: Joi.number()
      .min(0)
      .max(10)
      .required()
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.data);
  };
  render() {
    return (
      <div>
        <h1>New Movies</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {/* {this.renderInput("generes", "Generes")} */}
          {this.renderSelect("genresId", "Genes", this.state.genres)}
          {this.renderInput("numInStock", "Stock")}
          {this.renderInput("rate", "Rating")}

          {this.renderButton("Create Movie")}
        </form>
      </div>
    );
  }
}

export default MovieCreate;
