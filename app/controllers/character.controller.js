const db = require("../models");
const character = db.character;
const Op = db.Sequelize.Op;

// Create and Save a new Character
exports.create = (req, res) => {
  // Validate request
  if (!req.body.character_name) {
    res.status(400).send({
      message: "Character needs a name!"
    });
    return;
  }
  else if (!req.body.character_class) {
    res.status(400).send({
      message: "Character needs a class!"
    });
    return;
  }
  else if (!req.body.level) {
    res.status(400).send({
      message: "Character needs a level!"
    });
    return;
  }
  else if (!req.body.status) {
    res.status(400).send({
      message: "Character needs a status (Alive/Deceased/Retired)!"
    });
    return;
  }
  else if (!req.body.stat_array) {
    res.status(400).send({
      message: "Character needs a stat array!"
    });
    return;
  }
  else if (!req.body.user_id) {
    res.status(400).send({
      message: "Character needs a user ID!"
    });
    return;
  }

  // Create a Character
  const Character = {
    character_name: req.body.character_name,
    character_class: req.body.character_class,
    level: req.body.level,
    status: req.body.status,
    stat_array: req.body.stat_array,
    user_id: req.body.user_id,
    location_id: req.body.location_id,
    approved: req.body.approved
  };

  // Save Character in the database
  character.create(Character)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Character."
      });
    });
};

// Retrieve all Characters from the database.
exports.findAll = (req, res) => {
    character.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving characters."
        });
      });
  };

// Find a single Character with an id
exports.findOne = (req, res) => {
  const id = req.params.character_id;
  character.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Character with id=" + id
      });
    });
};

// Update a Character by the id in the request
exports.update = (req, res) => {
  const id = req.params.character_id;

  character.update(req.body, {
    where: { character_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Character was updated successfully."
        });
      } else {
        res.status(404).send({
          message: `Cannot update Character with id=${id}. Maybe Character was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Character with id=" + id
      });
    });
};

// Delete a Character with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.character_id;

  character.destroy({
    where: { character_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Character was deleted successfully!"
        });
      } else {
        res.status(404).send({
          message: `Cannot delete Character with id=${id}. Maybe Character was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Character with id=" + id
      });
    });
};

// Find all Characters of one Player
exports.findAllOfUser = (req, res) => {

  const user_id = req.params.user_id;

  character.findAll({ where: { user_id: user_id } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving characters."
      });
    });
};

exports.findAllByApproved = (req, res) => {

  const approved = req.params.approved;

  character.findAll({ where: { approved: approved } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving characters."
      });
    });
};

exports.findAllByName = (req, res) => {


  const character_name = req.params.character_name;

  character.findAll({ where: { character_name: {
      [Op.like]: '%' + character_name + '%'
    }
     }
   })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving characters."
      });
    });
};