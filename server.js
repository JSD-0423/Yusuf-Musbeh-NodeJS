const http = require("http");

const server = http.createServer((request,response)=>{
    console.log("request received");
    response.end("hello world");
})

server.listen(3000,"localhost",()=>console.log("server now is listening on port 3000"))