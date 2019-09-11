import React, {Component} from "react";
import {async} from "q";
import http from "../services/httpService";
import config from "../../config.json";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'

class MovieList extends Component {
    state = {movies: []};

    async componentDidMount() {
        const token=localStorage.getItem("token");
        const options = {
            headers: {'Authorization': "Token "+token}
        };
        const {data, status} = await axios.get("http://127.0.0.1:8000/api/movie",options);

        console.log(data, status);
        this.setState({movies: data})
    }

    render() {
        return (
            <div>
                <div>
                    {/* <Route path={"/post/new"} Component={} /> */}
                    {/* <ToastContainer rtl style={{ fontFamily: "Bzar" }} /> */}
                    Posts{this.state.movies.length}
                    <button className="btn btn-primary" onClick={this.handleAddPost}>
                        Add
                    </button>
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.movies.map(m => (
                            <tr>
                                <td>{m.title}</td>
                                <td>{m.genere.name}</td>
                                <td>
                                    {" "}
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => this.handlePostUpdate(m)}
                                    >
                                        Update
                                    </button>
                                </td>
                                <td>
                                    {" "}
                                    <button
                                        className="btn btn-alert"
                                        onClick={() => this.handlePostDelete(m)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default MovieList;
