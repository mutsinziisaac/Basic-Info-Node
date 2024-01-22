const http = require("http");
const fs = require("fs");
const port = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-Type": "text/html" });
  if (req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.write(404);
        res.write("Error" + err);
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (req.url === "/about") {
    fs.readFile("about.html", (err, data) => {
      if (err) {
        res.write(404);
        res.write("Error" + err);
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (req.url === "/contact-me") {
    fs.readFile("contact-me.html", (err, data) => {
      if (err) {
        res.write(404);
        res.write("Error" + err);
      } else {
        res.write(data);
      }
      res.end();
    });
  } else {
    fs.readFile("404.html", (err, data) => {
      if (err) {
        res.write(404);
        res.write("Error" + err);
      } else {
        res.write(data);
      }
      res.end();
    });
  }
});

server.listen(port, (err) => {
  if (err) {
    console.log(`there was an ${err}`);
  } else {
    console.log(`server is listening at ${port}`);
  }
});
