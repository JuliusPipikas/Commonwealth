module.exports = app => {
    const characters = require("../controllers/character.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Character
    router.post("/", characters.create);
  
    // Retrieve all Characters
    router.get("/", characters.findAll);
  
    // Retrieve all Characters of one player
    router.get("/oneplayer/:player_id", characters.findAllOfPlayer);
  
    // Retrieve a single Character with id
    router.get("/:character_id", characters.findOne);
  
    // Update a Character with id
    router.put("/:character_id", characters.update);
  
    // Delete a Character with id
    router.delete("/:character_id", characters.delete);
  
    app.use('/characters', router);
  };