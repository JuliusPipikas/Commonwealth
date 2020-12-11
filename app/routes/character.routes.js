const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = app => {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
    const characters = require("../controllers/character.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Character
    router.post("/", [authJwt.verifyToken, authJwt.isUser], characters.create);
  
    // Retrieve all Characters
    router.get("/", characters.findAll);

    router.get("/approved/:approved", characters.findAllByApproved);

    router.get("/byname/:character_name", characters.findAllByName);
  
    // Retrieve all Characters of one player
    router.get("/oneuser/:user_id", [authJwt.verifyToken, authJwt.isUser], characters.findAllOfUser);

    router.get("/byname/", characters.findAll);
  
    // Retrieve a single Character with id
    router.get("/:character_id", characters.findOne);
  
    // Update a Character with id
    router.put("/:character_id", [authJwt.verifyToken, authJwt.isUser], characters.update);
  
    // Delete a Character with id
    router.delete("/:character_id", [authJwt.verifyToken, authJwt.isUser], characters.delete);
  


    app.use('/api/characters', router);
  };