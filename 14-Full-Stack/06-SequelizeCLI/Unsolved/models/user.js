module.exports = function(sequelize, dataTypes) {
    const User = sequelize.define({
        email: dataTypes.STRING,
        password: dataTypes.STRING,
        age: dataTypes.INTEGER
    });
    return User;
}