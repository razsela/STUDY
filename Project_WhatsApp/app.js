console.log('Hello nodejs!');

console.log('Running the project...');

const http = require('http');
//create a server object:
http.createServer(function (req, res) {
    if (req.url == "/index.html" || req.url== '/') {
        res.write('Hello World!'); //write a response to the client
    }
    else{
        res.write(`you tried to reach ${req.url} which is not supported`); //end the response
    }
    res.end(); //end the response
    }).listen(3000); //the server object listens on port 8080