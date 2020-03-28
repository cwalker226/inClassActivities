const http = require("http");

const PORT1 = 7000;
const PORT2 = 7500;

const handleRequest = (req, res) => {
    res.end("Wash your hands for 20 sec");
}

const handleRequest2 = (req, res) => {
    res.end("Apples and Bananas!");
}

const server1 = http.createServer(handleRequest);
const server2 = http.createServer();

server1.listen(PORT1, () => {
    console.log(`Server 1 is running on ${PORT1}!`);
});

server2.listen(PORT2, () => {
    console.log(`Server 2 is running on ${PORT2}`);
});