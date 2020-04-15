const orm = require("./config/orm");

orm.selectSingleColumn("*", "parties");

orm.selectSingleColumn("party_name", "parties");

orm.selectSingleColumn("client_name", "clients");

orm.selectTypesOfParties("grown-up");

orm.showClientParties();