import React, { Component } from "react";
import axios from "axios";
import Posts from "./post";
import { Link, Route } from "react-router-dom";
import { async } from "q";
const apiEndPoint = `https://jsonplaceholder.typicode.com/posts`;
class PostsView extends Component {
  state = { posts: [] };
  componentDidMount() {
    axios.get(apiEndPoint).then(res => {
      const posts = res.data;
      this.setState({ posts: posts });
    });
  }
  handleAddPost = async () => {
    const obj = { title: "a", body: "222" };
    const { data: post } = await axios.post(apiEndPoint, obj);
    const posts = [post, ...this.state.posts];
    this.setState({ posts: posts });
    console.log(post);
  };
  handlePostUpdate = async post => {
    post.title = "update";
    const { data: postUpdate } = await axios.put(
      apiEndPoint + "/" + post.id,
      post
    );
    console.log(postUpdate);
  };
  render() {
    return (
      <div>
        {/* <Route path={"/post/new"} Component={} /> */}
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
                    post={m}
                    onClick={this.handlePostUpdate}
                  >
                    Update
                  </button>
                </td>
                <td>
                  {" "}
                  <button
                    className="btn btn-primary"
                    onClick={this.handleAddPost}
                  >
                    Add
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
