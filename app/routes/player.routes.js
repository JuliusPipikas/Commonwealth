module.exports = app => {
    const players = require("../controllers/player.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Player
    router.post("/", players.create);
  
    // Retrieve all Characters
    router.get("/", players.findAll);
  
    // Retrieve all Characters of one player
    router.get("/ranks/:rank", players.findAllOfRank);
  
    // Retrieve a single Character with id
    router.get("/:player_id", players.findOne);
  
    // Update a Character with id
    router.put("/:player_id", players.update);
  
    // Delete a Character with id
    router.delete("/:player_id", players.delete);
  
    app.use('/players', router);
  };