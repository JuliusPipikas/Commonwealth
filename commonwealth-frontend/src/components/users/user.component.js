import React, { Component } from "react";
import UserDataService from "../../services/user.service";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import AuthService from "../../services/auth.service";




export default class User extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeRank = this.onChangeRank.bind(this);
    this.onChangeDiscordId = this.onChangeDiscordId.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.getUser = this.getUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);

    this.state = {
      currentUser: {
      user_id: null,
      rank: "",
      username: "",
      discord_id: "",
      role: "",
      password: "",
      checkForAdmin: null,

      submitted: false
      },
      message: ""
    };
  }

  





  componentDidMount() {
    this.getUser(this.props.match.params.user_id);

    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        user_id: user.user_id,
        checkForAdmin: user.user_id == 2
      });
    }
  }

  onChangeUsername(e) {
    const username = e.target.value;

    this.setState(function(prevState) {
      return {
        currentUser: {
          ...prevState.currentUser,
          username: username
        }
      };
    });
  }

  onChangeRank(e) {
    const rank = e.target.value;

    this.setState(function(prevState) {
      return {
        currentUser: {
          ...prevState.currentUser,
          rank: rank
        }
      };
    });
  }

  onChangeDiscordId(e) {
    const discord_id = e.target.value;

    this.setState(function(prevState) {
      return {
        currentUser: {
          ...prevState.currentUser,
          discord_id: discord_id
        }
      };
    });
  }

  onChangeRole(e) {
    const role = e.target.value;

    this.setState(function(prevState) {
      return {
        currentUser: {
          ...prevState.currentUser,
          role: role
        }
      };
    });
  }

  onChangePassword(e) {
    const password = e.target.value;

    this.setState(function(prevState) {
      return {
        currentUser: {
          ...prevState.currentUser,
          password: password
        }
      };
    });
  }

  getUser(user_id) {
    UserDataService.get(user_id)
      .then(response => {
        this.setState({
          currentUser: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateUser() {
    UserDataService.update(
      this.state.currentUser.user_id,
      this.state.currentUser
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The User was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteUser() {    
    UserDataService.delete(this.state.currentUser.user_id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/Users')
      })
      .catch(e => {
        console.log(e);

      });
  }

  render() {
    const { currentUser, checkForAdmin } = this.state;


    var Example = () => {
      const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    
      return (
        <>
          <button
              className="badge badge-danger mr-2"
              onClick={handleShow}
            >
              Delete
            </button>


    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Delete the profile of {currentUser.username}?</Modal.Title>
            </Modal.Header>
            <Modal.Body>This action cannot be undone!</Modal.Body>
            <Modal.Footer>
              <Button variant="success" onClick={handleClose}>
                Close
              </Button>
              <Button variant="warning" onClick={this.deleteUser}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }

    if(checkForAdmin){

    return (
      <div>
        {currentUser ? (
          <div className="edit-form">
            <h4>User</h4>
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={currentUser.username}
                  onChange={this.onChangeUsername}
                />
              </div>

              <div className="form-group">
                <label htmlFor="rank">Rank</label>
                <input
                  type="text"
                  className="form-control"
                  id="rank"
                  value={currentUser.rank}
                  onChange={this.onChangeRank}
                />
              </div>

              <div className="form-group">
                <label htmlFor="discord_id">Discord ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="discord_id"
                  value={currentUser.discord_id}
                  onChange={this.onChangeDiscordId}
                />
              </div>

              <div className="form-group">
                <label htmlFor="role">Role</label>
                <input
                  type="text"
                  className="form-control"
                  id="role"
                  value={currentUser.role}
                  onChange={this.onChangeRole}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  value={currentUser.password}
                  onChange={this.onChangePassword}
                />
              </div>

            </form>

            <Example />

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateUser}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a User...</p>
          </div>
        )}
      </div>
    );

  }
  else{
    return(
    <h3>Admin content.</h3>
    );
  }
}
}