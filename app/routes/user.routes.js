const { authJwt } = require("../middleware");

module.exports = app => {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new Player

  router.post("/", [authJwt.verifyToken, authJwt.isUser], users.create);

  // Retrieve all Characters
  router.get("/", [authJwt.verifyToken, authJwt.isUser], users.findAll);

  // Retrieve all Characters of one player
  
  router.get("/ranks/:rank", [authJwt.verifyToken, authJwt.isUser], users.findAllOfRank);

  // Retrieve a single Character with id
  router.get("/:user_id", [authJwt.verifyToken, authJwt.isUser],  users.findOne);

  // Update a Character with id
  router.put("/:user_id", [authJwt.verifyToken, authJwt.isAdmin],  users.update);

  // Delete a Character with id
  router.delete("/:user_id", [authJwt.verifyToken, authJwt.isAdmin], users.delete);

  app.use('/api/users', router);

};