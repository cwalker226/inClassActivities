const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Lookup0226!",
    database: "greatBay_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    start();
});

function start(){
    inquirer.prompt({
        name: "postOrBid",
        type: "list",
        message: "Would like to create an auction or post a bid?",
        choices: [
            "Post",
            "Bid",
            "Exit"
        ]
    }).then(answer => {
        if(answer.postOrBid === "Post"){
            createItem();
        }else if(answer.postOrBid === "Bid"){
            bidItems();
        }else{
            connection.end();
        }
    });
}

function createItem(){
    inquirer.prompt([
        {
            name: "item",
            type: "input",
            message: "What is the item you would like to submit?"
        },
        {
            name: "category",
            type: "input",
            message: "What category would like to place your item in?"
        },
        {
            name: "startingBid",
            type: "number",
            message: "What will be your starting bid?"
        }
    ]).then(answer => {
        connection.query("INSERT INTO auctions SET ?",
        [{
            item_name: answer.item,
            category: answer.category,
            starting_bid: answer.startingBid
        }], function(err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " item inserted!\n");
        });
    });
}