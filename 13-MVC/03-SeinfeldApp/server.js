// Dependencies
var express = require("express");
var mysql = require("mysql");
// Create express app instance.
var app = express();
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;
// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Lookup0226!",
  database: "seinfeld_db"
});
// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
const buildHtml = function(rows) {
  // We then begin building out HTML elements for the page.
  var html = "<h1> Seinfeld Magic </h1>";
  // Here we begin an unordered list.
  html += "<ul>";
  // We then use the retrieved records from the database to populate our HTML file.
  for (var i = 0; i < rows.length; i++) {
    html += "<li><p> ID: " + rows[i].id + "</p>";
    html += "<p>Actor: " + rows[i].name + " </p></li>";
    html += "<p>Attitude: " + rows[i].attitude + " </p></li>";
    html += "<p>(Totally subjective) coolness: " + rows[i].coolness + " </p></li>";
  }
  // We close our unordered list.
  html += "</ul>";  
  return html;
};
const getDataAndBuildPage = function(req, res, sql) {
  connection.query(sql, function(err, result) {
    if (err) throw err;
    res.send(buildHtml(result));
  });
}
// Routes
// * Create a `/cast` route that will display all the actors and their data ordered by their id's.
app.get("/cast", function(req, res) {
  const sql = "SELECT * FROM actors ORDER BY id";
  getDataAndBuildPage(req, res, sql);
});
// * Create a `/coolness-chart` route that will display all the actors and their data ordered by their coolness points.
app.get("/coolness-chart", function(req, res) {
  const sql = "SELECT * FROM actors ORDER BY coolness DESC";
  getDataAndBuildPage(req, res, sql);
});
// * Create a `/attitude-chart/:att` route that will display all the actors for a specific type of attitude.
app.get("/attitude-chart/:att", function(req, res) {
  const attitude = req.params.att;
  const sql = `SELECT * 
                 FROM actors 
                WHERE attitude = '${attitude}'`;
  getDataAndBuildPage(req, res, sql);
});
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});