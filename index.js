// const Person = require("./person");
// console.log("Hello " + person.name +  " from Node.js");
// console.log(person);
// const person1 = new Person("Atif Waheed", 23);
// person1.greeting();

// const Logger = require("./logger");
// const logger = new Logger();

// logger.on("message", (data) => console.log("Called Listener: ", data));
// logger.log("Hello World");
// logger.log("Hello World 2");

const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   if (req.url === "/") {
  //     fs.readFile(path.join(__dirname, "public", "index.html"), (error, data) => {
  //       if (error) {
  //         res.writeHead(200, {
  //           "Content-Type": "text/html",
  //         });
  //         res.end("<h1>Error in Loading Data...</h1>");
  //       }
  //       res.writeHead(200, {
  //         "Content-Type": "text/html",
  //       });

  //       res.end(data);
  //     });
  //   } else if (req.url === "/about") {
  //     fs.readFile(path.join(__dirname, "public", "about.html"), (error, data) => {
  //       if (error) {
  //         res.writeHead(200, {
  //           "Content-Type": "text/html",
  //         });
  //         res.end("<h1>Error in Loading Data...</h1>");
  //       }
  //       res.writeHead(200, {
  //         "Content-Type": "text/html",
  //       });

  //       res.end(data);
  //     });
  //   } else if (req.url === "/api/users") {
  //     const users = [
  //       { name: "Bob Smith", age: 40 },
  //       { name: "Atif Waheed", age: 23 },
  //     ];
  //     res.writeHead(200, { "Content-Type": "application/json" });
  //     res.end(JSON.stringify(users));
  //   }
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  console.log(filePath);
  // Extension of File
  let extName = path.extname(filePath);
  console.log(extName);
  // Initial Content Type
  let contentType = "text/html";

  // Check Ext and set Content Type
  switch (extName) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // Read File
  fs.readFile(filePath, (error, content) => {
    if (error) {
      console.log(`Error: ${error}`);
      if (error.code == "ENOENT") {
        console.log("Opening 404.html");
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (error, data) => {
            if (error) {
              console.log(`Error...`);
              throw error;
            }
            res.writeHead(200, {
              "Content-Type": "text/html",
            });
            res.end(data, "utf8");
          }
        );
      } else {
        // Some Server Error
        console.log(`Some Server Error ${error}`);
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`);
      }
    } else {
      // Success
      console.log("Success...");
      res.writeHead(200, {
        "Content-Type": contentType,
      });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server Running on ${PORT}...`));
