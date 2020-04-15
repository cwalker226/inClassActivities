const Sequelize = require("sequelize");
const sequelize = require("../config/connection");
const AllCharacters = sequelize.define("allcharacters", {
    routeName: Sequelize.STRING,
    name: Sequelize.STRING,
    role: Sequelize.STRING,
    age: Sequelize.INTEGER,
    forcePoints: Sequelize.INTEGER
}, {
    freezeTableName: true,
    timestamps: false
});

AllCharacters.sync();

module.exports = AllCharacters;