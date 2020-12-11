import React, { Component } from "react";
import CharacterDataService from "../../services/character.service";
import { Link } from "react-router-dom";
import "../../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassHalf, faCheck } from '@fortawesome/free-solid-svg-icons'
import AuthService from "../../services/auth.service";

export default class CharactersList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchCharacterName = this.onChangeSearchCharacterName.bind(this);
    this.retrieveCharacters = this.retrieveCharacters.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveCharacter = this.setActiveCharacter.bind(this);
    this.searchCharacterName = this.searchCharacterName.bind(this);

    this.state = {
      characters: [],
      currentCharacterl: null,
      currentIndex: -1,
      searchCharacterName: "",
      user_id: null,
      checkForAdmin: null
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

    this.retrieveCharacters();
  }

  onChangeSearchCharacterName(e) {
    const searchCharacterName = e.target.value;

    this.setState({
      searchCharacterName: searchCharacterName
    });
  }

  retrieveCharacters() {
    CharacterDataService.getAll()
      .then(response => {
        this.setState({
          characters: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveCharacters();
    this.setState({
      currentCharacter: null,
      currentIndex: -1
    });
  }

  setActiveCharacter(character, index) {
    this.setState({
      currentCharacter: character,
      currentIndex: index
    });
  }

  searchCharacterName() {
    CharacterDataService.findAllByName(this.state.searchCharacterName)
      .then(response => {
        this.setState({
          characters: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { user_id, checkForAdmin, searchCharacterName, characters, currentCharacter, currentIndex } = this.state;


    function Done(){
      return  <FontAwesomeIcon icon={faCheck} size="lg"  />;
    }

    function Progress(){
      return <FontAwesomeIcon icon={faHourglassHalf} size="lg"  />;
    }

    function Check(props){
      const isDone = props.isDone;
      if(isDone){
        return <Done/>;
      }
      return <Progress/>;
    }

    return (
      
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control shadow-none"
              placeholder="Character Name"
              value={searchCharacterName}
              onChange={this.onChangeSearchCharacterName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-dark"
                type="button"
                onClick={this.searchCharacterName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        
        <div className="col-md-6">
        <div class="pushh4">
          <h4>Characters List</h4>
          </div>
          <div class="characterList">
          <ul className="list-group">
            {characters &&
              characters.map((character, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveCharacter(character, index)}
                  key={index}
                >
                  {character.character_name}
                </li>
              ))}
          </ul>   
                  
        </div>
        </div>
        <div className="col-md-6">
          {currentCharacter ? (
            
            <div class="characterTab">
              <div class="characterElement">
                <label>
                  <strong>Character Name:</strong>
                </label>{" "}
                <div class="characterElement">
                {currentCharacter.character_name}
                </div>
              </div>

              <div class="characterElement">
                <label>
                  <strong>Player:</strong>
                </label>{" "}
                <div class="characterElement">
                {currentCharacter.user_id}
                </div>
              </div>

              <div class="characterElement">
                <label>
                  <strong>Character Class:</strong>
                </label>{" "}
                <div class="characterElement">
                {currentCharacter.character_class}
                </div>
              </div>

              <div class="characterElement">
                <label>
                  <strong>Level:</strong>
                </label>{" "}
                <div class="characterElement">
                {currentCharacter.level}
                </div>
              </div>

              <div class="characterElement">
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                <div class="characterElement">
                {currentCharacter.status}
                </div>
              </div>

              <div class="characterElement">
                <label>
                  <strong>Stat Array:</strong>
                </label>{" "}
                <div class="characterElement">
                {currentCharacter.stat_array}
                </div>
              </div>

              <div class="characterElement">
                <label>
                  <strong>Location:</strong>
                </label>{" "}
                <div class="characterElement">
                {currentCharacter.location_id}
                </div>
              </div>

              <div class="characterElement">
                <label>
                <strong>Approved:</strong> 
                  {   } <Check isDone={currentCharacter.approved} />
                </label>{" "}
                <div class="characterElement">
                {currentCharacter.approved}
                </div>
              </div>

              {(checkForAdmin || currentCharacter.user_id == user_id) && ( 
              <div class="characterButtonRight">
              <Link
                to={"/characters/" + currentCharacter.character_id}
                className="btn btn-warning"
              >
                Edit
              </Link>
              </div>
              )}
          </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Character...</p>
            </div>
          )}
        </div>
        
      </div>
    );
  }
}