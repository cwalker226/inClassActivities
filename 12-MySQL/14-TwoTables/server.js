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
                "Find artists with a top song and top album in the same year",
                "exit"
            ]
        }).then(answer => {
            switch(answer.action){
                case "Find songs by artist":
                    findSongByArtist();
                    break;
                case "Find all artists who appear more than once":
                    findMultipleArtists();
                    break;
                case "Find data within a specific range":
                    findTimeRange();
                    break;
                case "Search for a specific song":
                    findASong();
                    break;
                case "Find artists with a top song and top album in the same year":
                    findTopSongAndAlbum();
                    break;
                case "exit":
                    connection.end();
                    break;
                default:
                    console.log("You picked wrong!");
                    connection.end();
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

function findMultipleArtists(){
    inquirer.prompt({
        name: "artist",
        type: "input",
        message: "What artist would you like to search for?"
    }).then(answer => {
        connection.query("SELECT count(*) FROM top5000 WHERE ?",
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

function findTimeRange(){
    inquirer.prompt([{
        name: "fromDate",
        type: "input",
        message: "What year would you like to start with?"
    },
    {
        name: "toDate",
        type: "input",
        message: "What year would you like to end with?"
    }]).then(answer => {
        connection.query(`SELECT * FROM top5000 WHERE year BETWEEN ${answer.fromDate} AND ${answer.toDate}`, 
        function(err, res) {
            if (err) throw err;
            console.log(res);
            runSearch();
        });
    });
}

function findASong(){
    inquirer.prompt({
        name: "song",
        type: "input",
        message: "What song would you like to search for?"
    }).then(answer => {
        connection.query("SELECT song FROM top5000 WHERE ?",
        {
            song: answer.song
        }, 
        function(err, res) {
            if (err) throw err;
            console.log(res);
            runSearch();
        });
    });
}

function findTopSongAndAlbum(){
    inquirer.prompt({
        name: "artist",
        type: "input",
        message: "What artist would you like to search for?"
    }).then(answer => {
        connection.query(`SELECT a.year, a.id, a.artist, s.song AS "Song", a.album AS "Album" FROM topAlbums a INNER JOIN top5000 s ON a.artist = s.artist AND a.year = s.year AND a.artist="${answer.artist}" ORDER BY a.year`,
        function(err, res) {
            if (err) throw err;
            console.log(`${res.length} matches found!`);
            for (let i=0; i<res.length; i++) {
                const resultNumber = i + 1;
                const year = res[i].year;
                const position = res[i].position;
                const artist = res[i].artist;
                const songTitle = res[i].songTitle;
                const albumTitle = res[i].albumTitle;
                console.log(`${resultNumber}.) Year: ${year} || Album Position: ${position} || Artist: ${artist} || Song: ${songTitle} || Album: ${albumTitle}`);
            }
            runSearch();
        });
    });
}