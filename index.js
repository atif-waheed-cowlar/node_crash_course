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
  if (req.url === "/") {
    res.end("<h1>Home Page</h1>");
  }
  console.log(req.url);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server Running on ${PORT}...`));
