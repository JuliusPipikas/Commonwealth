import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import AddLocation from "./components/locations/add-location.component";
import Location from "./components/locations/location.component";
import LocationsList from "./components/locations/locations-list.component";
import AddPlayer from "./components/players/add-player.component";
import Player from "./components/players/player.component";
import PlayersList from "./components/players/players-list.component";
import AddCharacter from "./components/characters/add-character.component";
import Character from "./components/characters/character.component";
import CharactersList from "./components/characters/characters-list.component";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardAdmin from "./components/board-admin.component";

class App extends Component {

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showAdminBoard: false,
      showRegisteredUserBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showRegisteredUserBoard: user.role >= 1,
        showAdminBoard: user.role == 2
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showRegisteredUserBoard, showAdminBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href={"/"} className="navbar-brand">
            The Commonwealth
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}

            <li className="nav-item">
              <Link to={"/locations"} className="nav-link">
                Locations
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/addLocation"} className="nav-link">
                Add Location
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/characters"} className="nav-link">
                Characters
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/addCharacter"} className="nav-link">
                Add Character
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/players"} className="nav-link">
                Players
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/addPlayer"} className="nav-link">
                Add Player
              </Link>
            </li>
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/characters"]} component={CharactersList} />
            <Route exact path="/addLocation" component={AddLocation} />
            <Route path="/locations/:location_id" component={Location} />
            <Route exact path={["/", "/locations"]} component={LocationsList} />
            <Route exact path="/addCharacter" component={AddCharacter} />
            <Route path="/characters/:character_id" component={Character} />
            <Route exact path={["/", "/players"]} component={PlayersList} />
            <Route exact path="/addPlayer" component={AddPlayer} />
            <Route path="/players/:player_id" component={Player} />
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;