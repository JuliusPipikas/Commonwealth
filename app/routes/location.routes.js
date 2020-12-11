const { authJwt } = require("../middleware");

module.exports = app => {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
    const locations = require("../controllers/location.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Player
    router.post("/", [authJwt.verifyToken, authJwt.isAdmin], locations.create);
  
    // Retrieve all Characters
    router.get("/", [authJwt.verifyToken, authJwt.isUser],locations.findAll);
  
    // Retrieve a single Character with id
    router.get("/:location_id", [authJwt.verifyToken, authJwt.isUser], locations.findOne);
  
    // Update a Character with id
    router.put("/:location_id", [authJwt.verifyToken, authJwt.isAdmin], locations.update);
  
    // Delete a Character with id
    router.delete("/:location_id", [authJwt.verifyToken, authJwt.isAdmin], locations.delete);
  
    app.use('/api/locations', router);
  };