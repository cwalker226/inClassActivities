const express = require("express");
var path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const tables = [
    {
        customerName: "Ahmed",
        customerEmail: "afhaque89@gmail.com",
        customerID: "afhaque89",
        phoneNumber: "979-587-0887"
    }
];

const waitList = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./index.html"));
});
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "./templates/tables.html"));
});
app.get("/api/tables", function(req, res) {
    return res.json(tables);
});
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "./templates/reserve.html"));
});
app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
});

app.post("/tables", function(req, res) {
    console.log(req.body);
});
app.post("/api/reserve", function(req, res) {
    console.log(req.body);
    let newReservation = req.body;

    if(tables.length < 5){
        tables.push(newReservation);
        res.send(true);
    }else{
        waitList.push(newReservation);
        res.send(false);
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});