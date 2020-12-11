import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBContainer, MDBRow, MDBCol} from "mdbreact";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'


import AuthService from "./services/auth.service";

import AddLocation from "./components/locations/add-location.component";
import Location from "./components/locations/location.component";
import LocationsList from "./components/locations/locations-list.component";
import AddUser from "./components/users/add-user.component";
import User from "./components/users/user.component";
import UsersList from "./components/users/users-list.component";
import AddCharacter from "./components/characters/add-character.component";
import Character from "./components/characters/character.component";
import CharactersList from "./components/characters/characters-list.component";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from "./components/profile.component";
import BoardAdmin from "./components/board-admin.component";


class App extends Component {

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showAdminBoard: false,
      showRegisteredUserBoard: false,
      currentUser: undefined
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
    const { currentUser, showAdminBoard } = this.state;

    return (
      
      <div>
        


        <Navbar bg="danger" expand="md">
        

        <Navbar.Brand href="/">The Commonwealth</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board 
                  
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link to={"/characters"} className="nav-link">
                Characters
              </Link>
              
            </li>

            <li className="nav-item">
              <Link to={"/users"} className="nav-link">
                Players
              </Link>
            </li>

            </Nav>
            <Nav className="ml-auto">
            {currentUser ? (
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}{"     "} <FontAwesomeIcon icon={faUser} size="lg" />
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut {"  "} <FontAwesomeIcon icon={faSignOutAlt} size="lg"  />

                  
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav mr-auto">
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>

        <MDBContainer size="md">
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/characters"]} component={CharactersList} />
            <Route exact path="/addLocation" component={AddLocation} />
            <Route path="/locations/:location_id" component={Location} />
            <Route exact path={["/", "/locations"]} component={LocationsList} />
            <Route exact path="/addCharacter" component={AddCharacter} />
            <Route path="/characters/:character_id" component={Character} />
            <Route exact path={["/", "/users"]} component={UsersList} />
            <Route exact path="/addUser" component={AddUser} />
            <Route path="/users/:user_id" component={User} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
        </div>
        </MDBContainer>
      </div>

     
    );
  }
}

export default App;