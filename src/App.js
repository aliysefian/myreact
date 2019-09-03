import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    countersData: [{ id: 1, name: 88 }, { id: 2, name: 2 }]
  };

  handleDelete = counter_id => {
    console.log("click must be", counter_id);
    const result = this.state.countersData.filter(m => m.id !== counter_id);
    this.setState({ countersData: result });
    //TODO: ali
  };
  handleReset = () => {
    const dt = this.state.countersData.map(c => {
      c.name = 0;
      return c;
    });
    this.setState({ countersData: dt });
    console.log(dt);
  };
  onIncrements = counter => {
    const indexOfCounter = this.state.countersData.findIndex(
      m => m.id === counter.id
    );
    const ss = [...this.state.countersData];
    ss[indexOfCounter].name = ss[indexOfCounter].name + 1;
    this.setState({ countersData: ss });

    console.log("counrte", this.state.countersData);
  };
  handleDecrements = counter => {
    const indexOfCounter = this.state.countersData.findIndex(
      m => m.id === counter.id
    );
    const ss = [...this.state.countersData];
    ss[indexOfCounter].name = ss[indexOfCounter].name - 1;
    this.setState({ countersData: ss });

    console.log("counrte", this.state.countersData);
  };

  render() {
    console.log("app render");
    return (
      <React.Fragment>
        <NavBar
          totalCount={this.state.countersData.filter(c => c.name > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrements={this.onIncrements}
            onDecrements={this.handleDecrements}
            countersData={this.state.countersData}
          />

          <Movies />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
// export default App;
