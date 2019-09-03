import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    return (
      <div>
        {/* <Counter />
        <Counter />
        <Counter />
        <Counter /> */}
        <button className="btn btn-danger" onClick={this.props.onReset}>
          Reset
        </button>
        {/* {console.log("asas", this.props.countersData)} */}
        {this.props.countersData.map(dt => (
          <Counter
            onDelete={this.props.onDelete}
            counter={dt}
            onIncrements={this.props.onIncrements}
            onDecrements={this.props.onDecrements}
            key={dt.id}
            value={dt.name}
            selected={true}
            id={dt.id}
          >
            <h4>counter #{dt.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
