const http = require("http");
const fs = require("fs/promises");
const server = http.createServer(handelRequest)

async function  handelRequest   (request,response)  {
    let file = await fs.open("request.txt","a");
    let DateObject = new Date(Date.now());
    file.writeFile(`\n${request.url} -- ${DateObject.getHours().toString()}:${DateObject.getMinutes().toString()}`);
    response.end("data saved successfully");
}

server.listen(3000,"localhost",()=>console.log("server now is listening on port 3000"))