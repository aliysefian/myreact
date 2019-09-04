import React, { Component } from "react";

class ListGroup extends Component {
  state = {};

  render() {
    return (
      <ul class="list-group" style={{ cursor: "pointer" }}>
        {this.props.items.map(cat => (
          <li
            key={cat._id}
            class={this.handleCategoryActiveClass(cat._id)}
            onClick={() => this.props.onItemSelect(cat)}
          >
            {cat.name}
          </li>
        ))}
      </ul>
    );
  }
  handleCategoryActiveClass(current) {
    if (this.props.currentGeneres == current) {
      return "list-group-item active";
    }
    return "list-group-item";
  }
}

export default ListGroup;
