import React, { Component } from "react";
import AuthService from "../../services/auth.service";
import CharacterDataService from "../../services/character.service";
import LocationDataService from "../../services/location.service";

export default class AddCharacter extends Component {
  constructor(props) {
    super(props);
    this.onChangeCharacterName = this.onChangeCharacterName.bind(this);
    this.onChangeCharacterClass = this.onChangeCharacterClass.bind(this);
    this.onChangeLevel = this.onChangeLevel.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeStatArray = this.onChangeStatArray.bind(this);
    this.onChangeLocationId = this.onChangeLocationId.bind(this);
    this.onChangeUserId = this.onChangeUserId.bind(this);
    this.onChangeApproved = this.onChangeApproved.bind(this);
    this.saveCharacter = this.saveCharacter.bind(this);
    this.newCharacter = this.newCharacter.bind(this);

    this.state = {
      character_id: null,
      character_name: "",
      character_class: "",
      level: null,
      status: "Alive",
      stat_array: "",
      user_id: null,
      location_id: 0,
      approved: 0,
      checkForAdmin: null,
      locations: [],

      submitted: false
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

    LocationDataService.getAll().then( response => { this.setState({
      locations: response.data
    })
    })
  }

  onChangeCharacterName(e) {
    this.setState({
      character_name: e.target.value
    });
  }

  onChangeCharacterClass(e) {
    this.setState({
      character_class: e.target.value
    });
  }

  onChangeLevel(e) {
    this.setState({
      level: e.target.value
    });
  }

  onChangeStatus(e) {
    this.setState({
      status: e.target.value
    });
  }

  onChangeStatArray(e) {
    this.setState({
      stat_array: e.target.value
    });
  }

  onChangeLocationId(e) {
    this.setState({
      location_id: e.target.value
    });
  }

  onChangeUserId(e) {
    this.setState({
      user_id: e.target.value
    });
  }

  onChangeApproved(e){
    this.setState({
      approved: e.target.value
    });
  }

  saveCharacter() {
    var data = {
      character_name: this.state.character_name,
      character_class: this.state.character_class,
      level: parseInt(this.state.level),
      status: this.state.status,
      stat_array: this.state.stat_array,
      location_id: this.state.location_id,
      user_id: this.state.user_id,
      approved: this.state.approved,
    };

    console.log(this.state.character_name);
    console.log(this.state.character_class);
    console.log(this.state.level);
    console.log(this.state.status);
    console.log(this.state.stat_array);
    console.log(this.state.location_id);
    console.log(this.state.user_id);
    console.log(this.state.approved);

    CharacterDataService.create(data)
      .then(response => {
        this.setState({
          character_id: response.data.character_id,
          character_name: response.data.character_name,
          character_class: response.data.character_class,
          level: response.data.level,
          status: response.data.status,
          stat_array: response.data.stat_array,
          location_id: response.data.stat_array,
          user_id: response.data.stat_array,
          approved: response.data.approved,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newCharacter() {
    this.setState({
      character_id: null,
      character_name: "",
      character_class: "",
      level: 1,
      status: "Alive",
      stat_array: "",
      user_id: null,
      location_id: 0,
      approved: 0,
      checkForAdmin: null,
      locations: [],

      submitted: false
    });
  }

  render() {

    const { checkForAdmin, locations } = this.state;

    return (

      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newCharacter}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="character_name">Name</label>
              <input
                type="text"
                className="form-control"
                id="character_name"
                required
                value={this.state.character_name}
                onChange={this.onChangeCharacterName}
                name="character_name"
                placeholder="Your character's name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="character_class">Class</label>
              <input
                type="text"
                className="form-control"
                id="character_class"
                required
                value={this.state.character_class}
                onChange={this.onChangeCharacterClass}
                name="character_class"
                placeholder="Your character's class"
              />
            </div>

            <div className="form-group">
              <label htmlFor="level">Level</label>
              <input
                type="number"
                className="form-control"
                id="level"
                required
                value={this.state.level}
                onChange={this.onChangeLevel}
                name="level"
                min="1"
                max="20"
                placeholder="Your character's level"
              />
            </div>

            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select className="form-control" id="status" required value={this.state.status}
                onChange={this.onChangeStatus}
                name="status"
                placeholder="Your character's current status">
              <option value= "Alive">Alive</option>
              <option value= "Retired">Retired</option>
              <option value= "Deceased">Deceased</option>
            </select>
            </div>

            <div className="form-group">
              <label htmlFor="stat_array">Stat Array</label>
              <input
                type="text"
                className="form-control"
                id="stat_array"
                required
                value={this.state.stat_array}
                onChange={this.onChangeStatArray}
                name="stat_array"
                placeholder="Ex. 11, 11, 11, 11, 11, 11"
              />
            </div>

            <div className="form-group">
              <label htmlFor="location_id">Location</label>
              <select className="form-control" id="location_id" required value={this.state.location_id}
                onChange={this.onChangeLocationId}
                name="location_id"
                placeholder="Your character's current location">
              {locations.map((location, index) => (
                <option value={location.location_id} key={index}>{location.location_name}</option>
              ))}
            </select>
            </div>
                
            {checkForAdmin && (
            <div className="form-group">
              <label htmlFor="user_id">User</label>
              <input
                type="text"
                className="form-control"
                id="user_id"
                required
                value={this.state.user_id}
                onChange={this.onChangeUserId}
                name="user_id"
                placeholder="[ADMIN FIELD] User"
              />
            </div>
            )}

            <button onClick={this.saveCharacter} className="btn btn-success">
              Submit
            </button>
          </div>)}
      </div>
    );
  }
}