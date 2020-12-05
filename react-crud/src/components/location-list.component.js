import React, { Component } from "react";
import LocationDataService from "../services/location.service";
import { Link } from "react-router-dom";

export default class LocationsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchLocationName = this.onChangeSearchLocationName.bind(this);
    this.retrieveLocations = this.retrieveLocation.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveLocation = this.setActiveLocation.bind(this);
    this.removeAllLocations = this.removeAllLocations.bind(this);
    this.searchLocationName = this.searchLocationName.bind(this);

    this.state = {
      locations: [],
      currentLocationl: null,
      currentIndex: -1,
      searchLocationName: ""
    };
  }

  componentDidMount() {
    this.retrieveLocations();
  }

  onChangeSearchLocationName(e) {
    const searchLocationName = e.target.value;

    this.setState({
      searchLocationName: searchLocationName
    });
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

  removeAllLocations() {
    LocationDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchLocationName() {
    LocationDataService.findByLocationName(this.state.searchLocationName)
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

  render() {
    const { searchLocationName, locations, currentLocation, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by LocationName"
              value={searchLocationName}
              onChange={this.onChangeSearchLocationName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchLocationName}
              >
                Search
              </button>
            </div>
          </div>
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

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllLocations}
          >
            Remove All
          </button>
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
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentLocation.published ? "Published" : "Pending"}
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
}