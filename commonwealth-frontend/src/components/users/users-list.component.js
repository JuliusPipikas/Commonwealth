import React, { Component } from "react";
import UserDataService from "../../services/user.service";
import { Link } from "react-router-dom";
import AuthService from "../../services/auth.service";

export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.retrieveUsers = this.retrieveUsers.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveUser = this.setActiveUser.bind(this);

    this.state = {
      users: [],
      currentUserl: null,
      currentIndex: -1,
      user_id: null,
      checkForAdmin: null
    };
  }

  componentDidMount() {
    this.retrieveUsers();
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        user_id: user.user_id,
        checkForAdmin: user.user_id == 2
      });
    }

    

  }

  retrieveUsers() {
    UserDataService.getAll()
      .then(response => {
        this.setState({
          users: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveUsers();
    this.setState({
      currentUser: null,
      currentIndex: -1
    });
  }

  setActiveUser(user, index) {
    this.setState({
      currentUser: user,
      currentIndex: index
    });
  }

  render() {
    const { users, currentUser, currentIndex, user_id, checkForAdmin } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
        </div>
        <div className="col-md-6">
          <h4>Users List</h4>

          <ul className="list-group">
            {users &&
              users.map((user, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveUser(user, index)}
                  key={index}
                >
                  {user.username}
                </li>
              ))}
          </ul>
        </div>
        <div className="col-md-6">
          {currentUser ? (
            <div>
              <h4>User</h4>
              <div>
                <label>
                  <strong>Username:</strong>
                </label>{" "}
                {currentUser.username}
              </div>

              <div>
                <label>
                  <strong>Rank:</strong>
                </label>{" "}
                {currentUser.rank}
              </div>

              <div>
                <label>
                  <strong>Discord ID:</strong>
                </label>{" "}
                {currentUser.discord_id}
              </div>

              {checkForAdmin && ( 
              <Link
                to={"/users/" + currentUser.user_id}
                className="badge badge-warning"
              >
                Edit
              </Link>
              )}
            </div>
            
          ) : (
            <div>
              <br />
              <p>Please click on a User...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}