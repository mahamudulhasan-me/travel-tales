const http = require("http");
const fs = require("fs");
const { dirname } = require("path");
const { buffer } = require("stream/consumers");
const server = http.createServer();

// listener

server.on("request", (req, res) => {
  if (req.url === "/read-file" && req.method === "GET");
  const readableStream = fs.createReadStream("./text/read.txt");
  readableStream.on("data", (buffer) => {
    res.write(buffer);
  });

  readableStream.on("end", () => console.log("Response is end"));
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
