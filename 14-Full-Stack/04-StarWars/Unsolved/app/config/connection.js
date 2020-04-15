// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Requiring mysql package
const Sequelize = require("sequelize");

// Setting up our connection information
const sequelize = new Sequelize("starwars", "root", "Lookup0226!", {
  host: "localhost",
  port: 3306,
  dialect: "mysql"
});

// Exporting our connection
module.exports = sequelize;
