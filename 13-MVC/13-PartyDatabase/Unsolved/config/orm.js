const connection = require("./connection");
const consoleTable = require("console.table");
const orm = {
    selectSingleColumn: function(column, table) {
        var query = "SELECT ?? FROM ??";
        connection.query(query, [column, table], queryCallback);
    },

    selectTypesOfParties: function(type) {
        var query = "SELECT * FROM parties WHERE party_type = ?";
        connection.query(query, [type], queryCallback);
    },

    showClientParties: function() {
        var query = "SELECT client_name, party_name, party_type, party_cost FROM clients JOIN parties WHERE clients.id = parties.client_id";
        connection.query(query, queryCallback);
    }
}

function queryCallback(err, result){
    if (err) throw err;
    console.table(result);
}

module.exports = orm;