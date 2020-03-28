const http = require("http");
const fs = require("fs");

const PORT = 8080;

const handleRequest = (req, res) => {
    const path = req.url;

    switch (path){
        case "/":
            res.end("You reached the home page.");
            break;
        case "/food":
            getWebPate("food.html", res);
            break;
        case "/movies":
            getWebPate("movies.html", res);
            break;
        case "/frameworks":
            getWebPate("frameworks.html", res);
            break;
        default:
            res.end("404");
    }
};

const server = http.createServer(handleRequest);
server.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});

function getWebPate(page, request){
    fs.readFile(page, (err, data) => {
        if(err) throw err;

        request.end(data);
    })
}