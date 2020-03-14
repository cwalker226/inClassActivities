var inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },
    {
        type: "checkbox",
        message: "What languages do you know?",
        name: "language",
        choices: ["english", "spanish", "french", "german", "chinese"]
    },
    {
        type: "list",
        message: "What is your preferred method of communciation?",
        name: "preferredComm",
        choices: ["email", "fax", "phone", "text"]
    }
]).then();

var fs = require("fs");

fs.writeFile("log.txt", process.argv[2], function(err) {

  if (err) {
    return console.log(err);
  }

  console.log("Success!");

});