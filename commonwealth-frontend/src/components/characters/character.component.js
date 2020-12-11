import React, { Component } from "react";
import CharacterDataService from "../../services/character.service";
import AuthService from "../../services/auth.service";

export default class Character extends Component {
  constructor(props) {
    super(props);
    this.onChangeCharacterName = this.onChangeCharacterName.bind(this);
    this.onChangeCharacterClass = this.onChangeCharacterClass.bind(this);
    this.onChangeLevel = this.onChangeLevel.bind(this);
    this.onChangerStatus = this.onChangeStatus.bind(this);
    this.onChangeStatArray = this.onChangeStatArray.bind(this);
    this.onChangeLocationId = this.onChangeLocationId.bind(this);
    this.onChangeUserId = this.onChangeUserId.bind(this);
    this.onChangeApproved = this.onChangeApproved.bind(this);
    this.getCharacter = this.getCharacter.bind(this);
    this.updateCharacter = this.updateCharacter.bind(this);
    this.deleteCharacter = this.deleteCharacter.bind(this);

    this.state = {
      currentCharacter: {
      character_id: null,
      character_name: "",
      character_class: "",
      level: null,
      status: "",
      stat_array: "",
      user_id: null,
      location_id: null,
      approved: null,
      user_id: null,
      checkForAdmin: null,

      submitted: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getCharacter(this.props.match.params.character_id);
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        user_id: user.user_id,
        checkForAdmin: user.user_id == 2
      });
    }
  }

  onChangeCharacterName(e) {
    const character_name = e.target.value;

    this.setState(function(prevState) {
      return {
        currentCharacter: {
          ...prevState.currentCharacter,
          character_name: character_name
        }
      };
    });
  }

  onChangeCharacterClass(e) {
    const character_class = e.target.value;

    this.setState(function(prevState) {
      return {
        currentCharacter: {
          ...prevState.currentCharacter,
          character_class: character_class
        }
      };
    });
  }

  onChangeLevel(e) {
    const level = e.target.value;

    this.setState(function(prevState) {
      return {
        currentCharacter: {
          ...prevState.currentCharacter,
          level: level
        }
      };
    });
  }

  onChangeStatus(e) {
    const status = e.target.value;

    this.setState(function(prevState) {
      return {
        currentCharacter: {
          ...prevState.currentCharacter,
          status: status
        }
      };
    });
  }

  onChangeStatArray(e) {
    const stat_array = e.target.value;

    this.setState(function(prevState) {
      return {
        currentCharacter: {
          ...prevState.currentCharacter,
          stat_array: stat_array
        }
      };
    });
  }

  onChangeLocationId(e) {
    const location_id = e.target.value;

    this.setState(function(prevState) {
      return {
        currentCharacter: {
          ...prevState.currentCharacter,
          location_id: location_id
        }
      };
    });
  }

  onChangeUserId(e) {
    const user_id = e.target.value;

    this.setState(function(prevState) {
      return {
        currentCharacter: {
          ...prevState.currentCharacter,
          user_id: user_id
        }
      };
    });
  }

  onChangeApproved(e) {
    const approved = e.target.value;

    this.setState(function(prevState) {
      return {
        currentCharacter: {
          ...prevState.currentCharacter,
          approved: approved
        }
      };
    });
  }

  getCharacter(character_id) {
    CharacterDataService.get(character_id)
      .then(response => {
        this.setState({
          currentCharacter: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateCharacter() {
    CharacterDataService.update(
      this.state.currentCharacter.character_id,
      this.state.currentCharacter
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The Character was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteCharacter() {    
    CharacterDataService.delete(this.state.currentCharacter.character_id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/Characters')
      })
      .catch(e => {
        console.log(e);

      });
  }

  render() {
    const { currentCharacter, user_id, checkForAdmin } = this.state;

    if(user_id == currentCharacter.user_id || checkForAdmin){
    
    return (
      <div>
        {currentCharacter ? (
          <div className="edit-form">
            <h4>Character</h4>
            <form>
              <div className="form-group">
                <label htmlFor="character_name">Character Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="character_name"
                  value={currentCharacter.character_name}
                  onChange={this.onChangeCharacterName}
                />
              </div>

              <div className="form-group">
                <label htmlFor="character_class">Character Class</label>
                <input
                  type="text"
                  className="form-control"
                  id="character_class"
                  value={currentCharacter.character_class}
                  onChange={this.onChangeCharacterClass}
                />
              </div>

              <div className="form-group">
                <label htmlFor="level">Level</label>
                <input
                  type="text"
                  className="form-control"
                  id="level"
                  value={currentCharacter.level}
                  onChange={this.onChangeLevel}
                />
              </div>

              <div className="form-group">
                <label htmlFor="status">Status</label>
                <input
                  type="text"
                  className="form-control"
                  id="status"
                  value={currentCharacter.status}
                  onChange={this.onChangeStatus}
                />
              </div>

              <div className="form-group">
                <label htmlFor="stat_array">Stat Array</label>
                <input
                  type="text"
                  className="form-control"
                  id="stat_array"
                  value={currentCharacter.stat_array}
                  onChange={this.onChangeStatArray}
                />
              </div>

              <div className="form-group">
                <label htmlFor="location_id">Location</label>
                <input
                  type="text"
                  className="form-control"
                  id="location_id"
                  value={currentCharacter.location_id}
                  onChange={this.onChangeLocationId}
                />
              </div>

              {checkForAdmin && (
              <div className="form-group">
                <label htmlFor="user_id">Player</label>
                <input
                  type="text"
                  className="form-control"
                  id="user_id"
                  value={currentCharacter.user_id}
                  onChange={this.onChangeUserId}
                />
              </div>
              )}

              {checkForAdmin && (
              <div className="form-group">
                <label htmlFor="approved">Approved</label>
                <input
                  type="text"
                  className="form-control"
                  id="approved"
                  value={currentCharacter.approved}
                  onChange={this.onChangeApproved}
                />
              </div>
              )}

            </form>

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteCharacter}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateCharacter}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Character...</p>
          </div>
        )}
      </div>
    );
  }
  else{
    return(
    <h3>Can't edit others' characters :\</h3>
    );
  }
}
}