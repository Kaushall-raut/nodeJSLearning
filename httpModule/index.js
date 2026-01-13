const http = require("http");

PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Hello Kaushal </h1>");
    res.end();
  }
});

server.listen(PORT, () => {
  console.log("listening to port 3000");
});
