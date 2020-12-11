const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  console.log(token);
  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    console.log("========")
    console.info(decoded)
    console.log("========")
    req.user_id = decoded.user_id;
    
    next();
  });
};

isAdmin = (req, res, next) => {
  User.findByPk(req.user_id).then(user => {
    if(user.role == 2){
      next();
      return;
    }

    res.status(403).send({
      message: "Require Admin Role!"
    });
    return;
    
    /*user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      
    });*/
  });
};

isUser = (req, res, next) => {
  User.findByPk(req.user_id).then(user => {
    console.log(user.role);
    if(user.role >= 1){
      next();
      return;
    }

    res.status(403).send({
      message: "Require User Role!"
    });
    return;
    
    /*user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "user") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require User Role!"
      });
    });*/
  });
};

isUserOrAdmin = (req, res, next) => {
  User.findByPk(req.user_id).then(user => {
    user.getRoles().then(roles => {
      
      if(user.role == 2){
        next();
        return;
      }

      if(user.role == 1){
        next();
        return;
      }
  
      res.status(403).send({
        message: "Require User or Admin Role!"
      });
      return;
      
      /*for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "user") {
          next();
          return;
        }

        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require User or Admin Role!"
      });*/
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isUser: isUser,
  isUserOrAdmin: isUserOrAdmin
};
module.exports = authJwt;