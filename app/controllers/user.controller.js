const db = require("../models");
const user = db.user;
const Op = db.Sequelize.Op;

// Create and Save a new Player
exports.create = (req, res) => {
  // Validate request
  if (!req.body.player_name) {
    res.status(400).send({
      message: "Player needs a name!"
    });
    return;
  }
  else if (!req.body.player_rank) {
    res.status(400).send({
      message: "Player needs a rank!"
    });
    return;
  }
  else if (!req.body.discord_id) {
    res.status(400).send({
      message: "Player needs a discord ID!"
    });
    return;
  }
  else if (!req.body.user_id) {
    res.status(400).send({
      message: "Player needs a user ID!"
    });
    return;
  }

  // Create a Player
  const Player = {
    player_id: req.body.player_id,
    player_name: req.body.player_name,
    player_rank: req.body.player_rank,
    discord_id: req.body.discord_id,
    user_id: req.body.user_id
  };

  // Save Player in the database
  player.create(Player)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Player."
      });
    });
};

// Retrieve all Players from the database.
exports.findAll = (req, res) => {
    user.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
  };

// Find a single Player with an id
exports.findOne = (req, res) => {
  const id = req.params.user_id;

  user.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};

// Update a Player by the id in the request
exports.update = (req, res) => {
  const id = req.params.user;

  user.update(req.body, {
    where: { user: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.status(404).send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

// Delete a Player with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.user_id;

  user.destroy({
    where: { user_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.status(404).send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};

// Find all Players of one Rank
exports.findAllOfRank = (req, res) => {

  const rank = req.params.rank;

  user.findAll({ where: { rank: rank } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};