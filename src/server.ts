import http from "node:http";
import * as fs from "fs";
import * as path from "path";
const server = http.createServer();

server.on("request", async (req, res) => {
  console.log("request url: ", req.url);

  const filePath: string = "./public" + req.url;
  const extname: string = String(path.extname(filePath)).toLowerCase();
  const mimeTypes: { [key: string]: string } = {
    ".html": "text/html",
    ".jpg": "image/jpeg",
    ".json": "text/json",
    ".ico": "image/x-icon",
  };
  const contentType = mimeTypes[extname] || "application/octet-stream";

  fs.readFile(filePath, function (error, content) {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("404\n");
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });

  // Content-Type is important for browsers.
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
  // res.writeHead(200, { "content-type": "text/plain" });
  // res.write("hello!\n");
  // res.end();
});

server.on("listening", () => {
  console.log("start listening!");
});

// Start listening 12345 port of localhost (127.0.0.1).
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`listening on http://localhost:${port}/`);
});
console.log("run server.js");
