const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

const writeFileAsync = util.promisify(fs.writeFile);

async function getUserInfo(){
    try {
        const {name} = await inquirer.prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "name"
            }]);
        const {location} = await inquirer.prompt([
            {
                type: "input",
                message: "Where are you from?",
                name: "location"
            }]);
        const {bio} = await inquirer.prompt([
            {
                type: "input",
                message: "What is your occupation?",
                name: "bio"
            }]);
        const {linkedIn} = await inquirer.prompt([
            {
                type: "input",
                message: "What is your LinkedIn URL?",
                name: "linkedIn"
            }]);
        const {github} = await inquirer.prompt([
            {
                type: "input",
                message: "What is your GitHub URL?",
                name: "github"
            }]);

        const htmlStr = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <div>
                <p>name: ${name}</p>
                <p>location: ${location}</p>
                <p>bio: ${bio}</p>
                <p>LinkedIn URL: ${linkedIn}</p>
                <p>GitHub URL: ${github}</p>
            </div>
        </body>
        </html>`;
        await writeFileAsync("index.html", htmlStr);
        console.log("Successful!");
    } catch (err) {
        console.log(err);
    }
}

getUserInfo();