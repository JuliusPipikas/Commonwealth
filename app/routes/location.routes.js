module.exports = app => {
    const locations = require("../controllers/location.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Player
    router.post("/", locations.create);
  
    // Retrieve all Characters
    router.get("/", locations.findAll);
  
    // Retrieve a single Character with id
    router.get("/:location_id", locations.findOne);
  
    // Update a Character with id
    router.put("/:location_id", locations.update);
  
    // Delete a Character with id
    router.delete("/:location_id", locations.delete);
  
    app.use('/api/locations', router);
  };