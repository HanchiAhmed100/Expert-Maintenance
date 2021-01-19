const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  	origin: "http://localhost:8100",
	origin: "http://localhost:8080",
  
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Maintenance Application" });
});

const db = require("./model");


// drop and create database
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });


db.sequelize.sync()

//load routers
require("./routes/client.route.js")(app);
require("./routes/contract.route.js")(app);
require("./routes/employe.route.js")(app);
require("./routes/image.route.js")(app);
require("./routes/intervention.route.js")(app);
require("./routes/priorite.route.js")(app);
require("./routes/site.route.js")(app);
require("./routes/tache.route.js")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});