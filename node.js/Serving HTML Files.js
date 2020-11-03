const http = require("http")
const fs  = require('fs')
const fileconteant = fs.readFileSync('ekg.html')

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'content-type':'text/html'});
    res.end(fileconteant)
});

server.listen(80, '127.0.0.1', ()=>{
    console.log("listening")
})