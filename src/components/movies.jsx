import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./like";
import Pagination from "./comman/pagination";
import paginate from "../utils/paginate";
class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1
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
      <div>
        <h2>total nummer of movies {this.state.movies.length}</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">title</th>
              <th scope="col">gener</th>
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
    );
  }
}

export default Movies;
