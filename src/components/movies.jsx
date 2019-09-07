import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./like";
import Pagination from "./comman/pagination";
import paginate from "../utils/paginate";
import ListGroup from "./comman/listGroup";
import { Redirect, BrowserRouter as Router, Link } from "react-router-dom";
class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
    currentGeneres: 1,
    generes: getGenres()
  };
  handleDelete = movie => {
    console.log(movie);
    const movies_filter = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({
      movies: movies_filter
    });
  };
  handlePaginationChange = page => {
    this.setState({ currentPage: page });
    console.log(page);
  };
  handleLikeChanges = movie => {
    console.log("like", movie);
    const movies_tot = [...this.state.movies];
    const idFind = movies_tot.findIndex(m => m._id == movie._id);
    movies_tot[idFind].liked = !movies_tot[idFind].liked;
    console.log("SS", movies_tot[idFind].liked);
    this.setState({ movies: movies_tot });
  };
  handleGeneresSelected = generes => {
    this.setState({ currentGeneres: generes._id });

    console.log("geneers", generes);
  };

  render() {
    if (this.state.movies.length === 0) {
      return <h1>There is no Movie</h1>;
    }
    const movies = paginate(
      this.state.movies,
      this.state.currentPage,
      this.state.pageSize
    );
    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={this.state.generes}
            onItemSelect={this.handleGeneresSelected}
            currentGeneres={this.state.currentGeneres}
          />
        </div>
        <div className="col">
          <Link className="btn btn-primary" to="movie/new">
            New Movie
          </Link>
          <h2>total number of movies {this.state.movies.length}</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">title</th>
                <th scope="col">genere</th>
                <th scope="col">stock</th>
              </tr>
            </thead>
            <tbody>
              {movies.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onLikeChanges={this.handleLikeChanges}
                      movie={movie}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleDelete(movie);
                      }}
                      className="btn btn-danger btn-sm "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemCount={this.state.movies.length}
            pageSize={this.state.pageSize}
            onPageChange={this.handlePaginationChange}
            currentPage={this.state.currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
