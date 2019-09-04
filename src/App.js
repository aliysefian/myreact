import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import Product from "./components/product";
import AdminDashboard from "./components/admin/admindashboard";
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
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/counter">Users</Link>
          </li>
          <li>
            <Link to="/admin">admin</Link>
          </li>
        </ul>
        <div>
          <Route exact path="/" component={Movies} />
          <Route path="/about" component={Product} />
          <Route path="/admin" component={AdminDashboard} />
          <Route
            path="/counter"
            render={() => (
              <Counters
                onReset={this.handleReset}
                onDelete={this.handleDelete}
                onIncrements={this.onIncrements}
                onDecrements={this.handleDecrements}
                countersData={this.state.countersData}
              />
            )}
          />
        </div>
        {/* <Route path="/topics" component={Topics} /> */}
      </Router>
      // <div>
      //   <NavBar
      //     totalCount={this.state.countersData.filter(c => c.name > 0).length}
      //   />
      //   <Router>
      //     {/* <Route path={"products"} Component={Product} /> */}
      //     <Route path={"movies"} Component={Movies} />
      //   </Router>
      //   <ul>
      //     <li>
      //       <a href="/">Home</a>
      //     </li>
      //     <li>
      //       <a href="/products">Products</a>
      //     </li>
      //     <li>
      //       <a href="/movies">Posts</a>
      //     </li>
      //     <li>
      //       <a href="/admin">Admin</a>
      //     </li>
      //   </ul>
      /* { <main className="container">
          <Counters
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrements={this.onIncrements}
            onDecrements={this.handleDecrements}
            countersData={this.state.countersData}
          />

          <Movies /> }
        {/* </main> }*/
      // </div>
    );
  }
}

export default App;
// export default App;
