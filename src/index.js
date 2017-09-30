const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 3000

const handleRequests = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile("./dist/index.html", null, function(err, data){
        if (err){
            response.writeHead(404);
            response.write('File not found!')
        } else{
            response.write(data);
        }
        response.end();
    });
}


const server = http.createServer(handleRequests).listen(port, (err) => {
    if (err) {
        return console.log('There\'s an issue', err)
    }
    console.log(`Server running at http://${hostname}:${port}/`);
})