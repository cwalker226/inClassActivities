const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const PORT = 3000;

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
    {name: "pistachio", price: 11, awesomeness: 15}
];

app.get("/icecream/:name", function(req, res) {
    const icecreamName = req.params.name;
    const icecreamItem = icecreams.filter(item => {
        return item.name === icecreamName;
    });

    res.render("icecream", icecreamItem[0]);
});

app.get("/icecreams", function(req, res) {
    res.render("allIcecreams", {icecreams: icecreams});
});

app.listen(PORT, function() {
    console.log("Server is listening on Port " + PORT);
});