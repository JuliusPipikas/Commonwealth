import React, { Component } from "react";
import UserDataService from "../../services/user.service";
import AuthService from "../../services/auth.service";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeRank = this.onChangeRank.bind(this);
    this.onChangeDiscordId = this.onChangeDiscordId.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.newUser = this.newUser.bind(this);

    this.state = {
      user_id: null,
      rank: "",
      username: "",
      discord_id: "",
      role: "",
      password: "",
      checkForAdmin: null,
      user_id: null,

      submitted: false
    };
  }

  onChangeUsername(e) {
    this.setState({
      user_name: e.target.value
    });
  }

  onChangeRank(e) {
    this.setState({
      user_rank: e.target.value
    });
  }

  onChangeDiscordId(e) {
    this.setState({
      discord_id: e.target.value
    });
  }

  onChangeRole(e) {
    this.setState({
      role: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  saveUser() {
    var data = {
      rank: this.state.user_rank,
      username: this.state.user_name,
      discord_id: this.state.discord_id,
      role: this.state.role,
      password: this.state.password,

      
    };

    UserDataService.create(data)
      .then(response => {
        this.setState({
          user_id: response.data.user_id,
          rank: response.data.rank,
          username: response.data.username,
          discord_id: response.data.discord_id,
          role: response.data.role,
          password: response.date.password,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newUser() {
    this.setState({
      user_id: null,
      rank: "",
      username: "",
      discord_id: "",
      role: "",
      password: "",

      submitted: false
    });
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
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newUser}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="username">Name</label>
              <input
                type="text"
                className="form-control"
                id="username"
                required
                value={this.state.username}
                onChange={this.onChangeUsername}
                name="username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="rank">Rank</label>
              <input
                type="text"
                className="form-control"
                id="rank"
                required
                value={this.state.rank}
                onChange={this.onChangeRank}
                name="rank"
              />
            </div>

            <div className="form-group">
              <label htmlFor="discord_id">Discord ID</label>
              <input
                type="text"
                className="form-control"
                id="discord_id"
                required
                value={this.state.discord_id}
                onChange={this.onChangeDiscordId}
                name="discord_id"
              />
            </div>

            <div className="form-group">
              <label htmlFor="role">Role</label>
              <input
                type="text"
                className="form-control"
                id="role"
                required
                value={this.state.role}
                onChange={this.onChangeRole}
                name="role"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className="form-control"
                id="password"
                required
                value={this.state.password}
                onChange={this.onChangePassword}
                name="password"
              />
            </div>

            <button onClick={this.saveUser} className="btn btn-success">
              Submit
            </button>
          </div>)}
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