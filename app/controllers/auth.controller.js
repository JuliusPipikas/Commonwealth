const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8),
    role: req.body.role,
    rank: req.body.rank,
    discord_id: req.body.discord_id
    
  })
  .then(user => {
    res.send({ message: "User was registered successfully!" });
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
});
  
  /*  .then(user => {
        if(user){
            res.send({ message: "User was registered successfully!"});
        }
    })
    
    */

};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ user_id: user.user_id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      res.status(200).send({
        user_id: user.user_id,
        username: user.username,
        role: user.role,
        accessToken: token
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};