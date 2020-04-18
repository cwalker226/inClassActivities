// Dependencies
// =============================================================

// Require the sequelize library
// Require the connection to the database (connection.js)
const Sequelize = require("sequelize");
const sequelize = require("../config/connection");
// Create a "Book" model with the following configuration

// 1. A title property of type STRING
// 2. An author property of type STRING
// 3. A genre property of type STRING
// 4. A pages property of type INTEGER
const Book = sequelize.define("books", {
    title: Sequelize.STRING,
    author: Sequelize.STRING,
    genre: Sequelize.STRING,
    pages: Sequelize.INTEGER
}, {
    freezeTableName: true,
    timestamps: false
});
// Sync model with DB
Book.sync();
// Export the book model for other files to use
module.exports = Book;