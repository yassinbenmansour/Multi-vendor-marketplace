//importation  dee package HTTP
const http = require('http');

//Create server

const server = http.createServer((req, res) => {
    res.end("voila la reponse");
});

server.listen(process.env.PORT || 3000);