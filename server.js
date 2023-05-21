const http = require("http");
const fs = require("fs/promises");
const server = http.createServer(handelRequest)
const PORT=3000;
const HOST= "localhost";

async function  handelRequest   (request,response)  {
    let DateObject = new Date(Date.now());
    await fs.appendFile("request.txt",`\n${request.url} -- ${DateObject.getHours().toString()}:${DateObject.getMinutes().toString()}`);
    response.end("data saved successfully");
}

server.listen(PORT,HOST,()=>console.log("server now is listening on port 3000"))