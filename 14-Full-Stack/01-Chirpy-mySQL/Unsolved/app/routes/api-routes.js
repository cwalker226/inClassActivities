// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/all", (req, res) => {
    connection.query("SELECT * FROM chirps", (err, result) => {
      if(err) throw err;
      res.json(result);
    });
  });

  // Add a chirp
  app.post("/api/new", (req, res) => {
    connection.query("INSERT INTO chirps (author, chirp) VALUES (?,?)", [req.body.author, req.body.body], (err, result) => {
      if(err) throw err;
      res.json(result);
    });
  });
};
