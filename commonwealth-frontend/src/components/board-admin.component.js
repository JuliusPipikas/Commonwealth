import React, { Component } from "react";

import UserService from "../services/user.service";
import AuthService from "../services/auth.service";


import { Link } from "react-router-dom";

export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkForAdmin: null,
      user_id: null
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        user_id: user.user_id,
        checkForAdmin: user.user_id == 2
      });
    }
  }

  render() {
    const { checkForAdmin } = this.state;

    if(checkForAdmin){
    return (
      <div className="container">
        <header className="jumbotron">
            <h3>Admin Board</h3>
        </header>

        <Link to={"/locations"} className="nav-link">
            <button className="btn btn-warning">
            Locations List
            </button>
        </Link>

        <Link to={"/addLocation"} className="nav-link">
            <button className="btn btn-success">
            Add Location
            </button>
        </Link>

        <Link to={"/addUser"} className="nav-link">
            <button className="btn btn-success">
            Add User
            </button>
        </Link>

        <Link to={"/addCharacter"} className="nav-link">
            <button className="btn btn-success">
            Add Character
            </button>
        </Link>

      </div>
    );
  }
  else{
    return(
    <h3>Admin Content</h3>
    );
  }
}
}