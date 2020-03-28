const http = require("http");
const fs = require("fs");
const PORT = 8080;

const postData = (req, res) => {
    let requestData = "";

    req.on("data", (data) => {
        requestData += data;
        console.log(`We have received ${data}`);
    });

    req.on("end", () => {
        console.log(requestData);
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("Thank you for your submission.");
    })
}

const renderWelcomeData = (req, res) => {
    fs.readFile(__dirname + "/index.html", function(err, data){
        if(err) throw err;

        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
    })
};

const handleRequest = (req, res) => {
    const path = req.url;

    switch (path){
        case "/":
            return renderWelcomeData(req, res);
            break;
        case "/thanks":
            postData(req, res);
            break;
        default:
            res.end("No path found");
    }
};
const server = http.createServer(handleRequest);

server.listen(PORT, () => {
    console.log("The server is running!");
});