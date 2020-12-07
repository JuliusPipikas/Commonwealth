const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
  //origin: "https://drumian-commonwealth.herokuapp.com/"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();

// simple route
/*app.get("/", (req, res) => {
  //res.json({ message: "Welcome to the Coooommonwealth!" });
  res.sendFile(path.join(__dirname, "commonwealth-frontend", "build", "index.html"));
  //res.App(req, )
});*/

let root = path.join(__dirname, 'commonwealth-frontend', 'build');
app.use(express.static(root));
app.use(function(req, res, next) {
if (req.method === 'GET' && req.accepts('html') && !req.is('json') && 
 !req.path.includes('api')) {
   res.sendFile('index.html', { root });
 } else next();
 });

/*app.get("/", (req, res) => {
  
 });*/

require("./app/routes/character.routes")(app);
require("./app/routes/player.routes")(app);
require("./app/routes/location.routes")(app);
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

