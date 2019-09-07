import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import {
  Route,
  BrowserRouter as Router,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import Product from "./components/product";
import AdminDashboard from "./components/admin/admindashboard";
import NavBarRoute from "./components/navbarroute";
import NotFound from "./components/comman/notFound";
import LoginForm from "./components/loginForm";
import Register from "./components/register";
import MovieCreate from "./components/newmovie";
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
    return (
      <div>
        <NavBarRoute />
        <div>
          <main className="container">
            <Switch>
              <Route exact path="/movies" component={Movies} />
              <Route exact path="/login" component={LoginForm} />
              <Route path="/about" component={Product} />
              <Route path="/register" component={Register} />
              <Route path="/movie/new" component={MovieCreate} />

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
              <Route path={"/not-found"} component={NotFound} />
              <Redirect exact from={"/"} to={"/movies"} />
              <Redirect to={"/not-found"} />
            </Switch>
          </main>
        </div>
        {/* <Route path="/topics" component={Topics} /> */}
      </div>
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
