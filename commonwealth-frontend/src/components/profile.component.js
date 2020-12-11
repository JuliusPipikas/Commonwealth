//import { response } from "express";
import React, { Component } from "react";
import AuthService from "../services/auth.service";
import CharacterService from "../services/character.service";
import UserService from "../services/user.service";
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassHalf, faCheck } from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom";

export default class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
      actualCurrentUser: "",
      characters: []
    };
    
  }

  componentDidMount() {

    UserService.get(this.state.currentUser.user_id).then(
      response => {
        this.setState({
          actualCurrentUser: response.data
        }, () =>
        CharacterService.findCharactersByUser(this.state.currentUser.user_id).then(
          async (data) => {
            this.setState({
              characters: data.data
            })
          })
        )  
    }
    )
  }

  render() {
    const { currentUser, characters, actualCurrentUser } = this.state;

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
      <div className="container">

<i class="fas fa-user"></i>
     


        <header className="jumbotron">
          
              <h3>
                <strong>{currentUser.username}</strong>'s Profile
              </h3>

              <p>
              <strong>Rank: </strong>{" "}
              {actualCurrentUser.rank}
              </p>

              <p>
              <strong>Discord ID: </strong>{" "}
              {actualCurrentUser.discord_id}
              </p>
        </header>
        
        
        <div id="car">
        <Carousel interval={500000000} wrap={true} touch={false} keyboard={false} class="carousel-slide">  
          {characters.map((character, index) => (
          <Carousel.Item key={index}>
            
            <div>
                <label>
                  <strong>Character Name:</strong> {character.character_name}
                </label>{" "}
                
              </div>

              <div>
                <label>
                  <strong>Character Class:</strong> {character.character_class}
                </label>{" "}
                
              </div>

              <div>
                <label>
                  <strong>Level:</strong> {character.level}
                </label>{" "}
              </div>

              <div>
                <label>
                  <strong>Status:</strong> {character.status}
                </label>{" "}
              </div>

              <div>
                <label>
                  <strong>Stat Array:</strong> {character.stat_array}
                </label>{" "}
              </div>

              <div>
                <label>
                  <strong>Location:</strong> {character.location_id}
                </label>{" "}
              </div>

              <div>
                <label>
                  <strong>Approved:</strong> 
                  {   } <Check isDone={character.approved} />
                   
                </label>{" "}
              </div>

              <Link
                to={"/characters/" + character.character_id}
                className="btn btn-warning"
              >
                Edit
              </Link>

          </Carousel.Item>
           ))}

        </Carousel>  
        </div>

        <div id="pushleft">
        <Link to={"/addCharacter"} className="nav-link">
            <button className="btn btn-success">
            Add Character
            </button>
        </Link>

        </div>


        
      </div>
    );
  }
}