import React, { Component } from "react";

class Counter extends Component {
  state = {
    // count: this.props.value,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  }; /*
    constructor(){
        super();
        this.handleIncrements=this.handleIncrements.bind(this);
        // console.log(this)
    }*/
  render() {
    return (
      <div>
        {this.props.children}
        {/*<img src={this.state.imageUrl} alt="" />*/}
        <span className={this.classColorController()}>
          {this.formatCount()}
        </span>

        <button
          onClick={() => this.props.onIncrements(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrements(this.props.counter)}
          className="btn btn-warning btn-sm m-1"
          disabled={this.adjustClassOnDecrements()}
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn m-1 btn-danger btn-sm"
        >
          delete
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  // handleIncrements = product => {
  //   // console.log("inc", this);
  //   console.log("PRO", product);
  //   // this.props.value = 0;

  //   this.setState({ count: this.state.count + 1 });
  // };

  classColorController() {
    let classData = "badge m-2 badge-";
    classData += this.props.counter.name === 0 ? "warning" : "primary";
    return classData;
  }

  formatCount() {
    const count = this.props.counter.name;
    return count === 0 ? "Zero" : count;
  }
  adjustClassOnDecrements() {
    const minus = this.props.counter.name;
    if (minus <= 0) {
      return "disabled";
    } else return null;
  }
}

export default Counter;
