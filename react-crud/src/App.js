import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/locations" className="navbar-brand">
            Julius Pipikas
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/locations"} className="nav-link">
                Locations
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/locations"]} component={LocationsList} />
            <Route exact path="/add" component={AddLocation} />
            <Route path="/locations/:id" component={Location} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;