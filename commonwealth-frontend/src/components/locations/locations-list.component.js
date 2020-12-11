import React, { Component } from "react";
import LocationDataService from "../../services/location.service";
import { Link } from "react-router-dom";
import AuthService from "../../services/auth.service";

export default class LocationsList extends Component {
  constructor(props) {
    super(props);
    this.retrieveLocations = this.retrieveLocations.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveLocation = this.setActiveLocation.bind(this);

    this.state = {
      locations: [],
      currentLocationl: null,
      currentIndex: -1,
      checkForAdmin: null,
      user_id: null
    };
  }

  componentDidMount() {
    this.retrieveLocations();

    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        user_id: user.user_id,
        checkForAdmin: user.user_id == 2
      });
    }
  }

  retrieveLocations() {
    LocationDataService.getAll()
      .then(response => {
        this.setState({
          locations: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveLocations();
    this.setState({
      currentLocation: null,
      currentIndex: -1
    });
  }

  setActiveLocation(location, index) {
    this.setState({
      currentLocation: location,
      currentIndex: index
    });
  }

  render() {
    const { checkForAdmin, locations, currentLocation, currentIndex } = this.state;
    if(checkForAdmin){
    return (
      <div className="list row">
        <div className="col-md-8">
        </div>
        <div className="col-md-6">
          <h4>Locations List</h4>

          <ul className="list-group">
            {locations &&
              locations.map((location, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveLocation(location, index)}
                  key={index}
                >
                  {location.location_name}
                </li>
              ))}
          </ul>

          <Link to={"/addLocation"} className="nav-link">
            <button className="btn btn-success">
            Add Location
            </button>
          </Link>
        </div>
        <div className="col-md-6">
          {currentLocation ? (
            <div>
              <h4>Location</h4>
              <div>
                <label>
                  <strong>Location Name:</strong>
                </label>{" "}
                {currentLocation.location_name}
              </div>

              <Link
                to={"/locations/" + currentLocation.location_id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Location...</p>
            </div>
          )}
        </div>
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