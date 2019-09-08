import React, { Component } from "react";
import http from "../services/httpService";
import Posts from "./post";
import { Link, Route } from "react-router-dom";
import { async } from "q";
import config from "../../config.json";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const apiEndPoint = config.apiEndPoint;

class PostsView extends Component {
  state = { posts: [] };
  componentDidMount() {
    http.get(apiEndPoint).then(res => {
      const posts = res.data;
      this.setState({ posts: posts });
    });
  }
  handleAddPost = async () => {
    const obj = { title: "a", body: "222" };
    const { data: post } = await http.post(apiEndPoint, obj);
    const posts = [post, ...this.state.posts];
    this.setState({ posts: posts });
    console.log(post);
  };
  handlePostUpdate = async post => {
    // console.log(post);
    post.title = "update";
    const { data: postUpdate } = await http.put(
      apiEndPoint + "/" + post.id,
      post
    );
    const oldPost = [...this.state.posts];
    const index = oldPost.indexOf(post);
    oldPost[index] = { ...post };
    // http.patch(apiEndPoint, { title: post.title });
    this.setState({ oldPost });

    console.log(postUpdate);
  };
  handlePostDelete = async post => {
    const originalPosts = this.state.posts;
    const posts = this.state.posts.filter(m => m.id !== post.id);
    this.setState({ posts });
    try {
      const { data, status } = await http.delete(
        "sss" + apiEndPoint + "/" + post.id
      );
      // throw new Error("");
    } catch (ex) {
      //expected(404 :notfound )
      if (ex.response && ex.response.status) {
        alert("notfound maybe deleted ");
      }
      //UnExpected

      this.setState({ posts: originalPosts });
    }
    // console.log(data, status);
  };
  render() {
    return (
      <div>
        {/* <Route path={"/post/new"} Component={} /> */}
        <ToastContainer rtl style={{ fontFamily: "Bzar" }} />
        Posts{this.state.posts.length}
        <button className="btn btn-primary" onClick={this.handleAddPost}>
          Add
        </button>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Title </th>
              <th scope="col">Update </th>
              <th scope="col">Delete </th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(m => (
              <tr>
                <td>{m.title}</td>
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
    );
  }
}

export default PostsView;
