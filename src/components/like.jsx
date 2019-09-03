import React, { Component } from "react";
class Like extends Component {
  state = {};
  render() {
    return (
      <div
        onClick={() => this.props.onLikeChanges(this.props.movie)}
        style={{ cursor: "pointer" }}
      >
        <i className={this.likeFormat()} aria-hidden="true"></i>
      </div>
    );
  }

  likeFormat = () => {
    const liked = this.props.liked;
    if (liked) {
      return "fa fa-heart";
    } else return "fa fa-heart-o";
  };
}

export default Like;
