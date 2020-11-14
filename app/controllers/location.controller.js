const db = require("../models");
const location = db.location;
const Op = db.Sequelize.Op;

// Create and Save a new Location
exports.create = (req, res) => {
  // Validate request
  if (!req.body.location_name) {
    res.status(400).send({
      message: "Location needs a name!"
    });
    return;
  }

  // Create a Location
  const Location = {
    location_id: req.body.location_id,
    location_name: req.body.location_name
  };

  // Save Location in the database
  location.create(Location)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Location."
      });
    });
};

// Retrieve all Locations from the database.
exports.findAll = (req, res) => {
    location.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving locations."
        });
      });
  };

// Find a single Location with an id
exports.findOne = (req, res) => {
  const id = req.params.location_id;

  location.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Location with id=" + id
      });
    });
};

// Update a Location by the id in the request
exports.update = (req, res) => {
  const id = req.params.location_id;

  location.update(req.body, {
    where: { location_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Location was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Location with id=${id}. Maybe Location was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Location with id=" + id
      });
    });
};

// Delete a Location with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.location_id;

  location.destroy({
    where: { location_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Location was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Location with id=${id}. Maybe Location was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Location with id=" + id
      });
    });
};