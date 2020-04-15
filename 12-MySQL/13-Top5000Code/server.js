const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Lookup0226!",
    database: "top_songs"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    runSearch();
  });

  function runSearch(){
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "Find songs by artist",
                "Find all artists who appear more than once",
                "Find data within a specific range",
                "Search for a specific song",
                "exit"
            ]
        }).then(answer => {
            switch(answer.action){
                case "Find songs by artist":
                    findSongByArtist();
                    break;
                case "Find all artists who appear more than once":
                    break;
                case "Find data within a specific range":
                    break;
                case "Search for a specific song":
                    break;
                case "exit":
                    break;
                default:
                    break;
            }
        })
  }

  function findSongByArtist(){
    inquirer.prompt({
        name: "artist",
        type: "input",
        message: "What artist would you like to search for?"
    }).then(answer => {
        connection.query("SELECT song FROM top5000 WHERE ?",
        {
            artist: answer.artist
        }, 
        function(err, res) {
            if (err) throw err;
            console.log(res);
            runSearch();
        });
    });
  }