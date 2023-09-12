// const Person = require("./person");
// console.log("Hello " + person.name +  " from Node.js");
// console.log(person);
// const person1 = new Person("Atif Waheed", 23);
// person1.greeting();

const Logger = require("./logger");
const logger = new Logger();

logger.on("message", (data) => console.log("Called Listener: ", data));
logger.log("Hello World");
logger.log("Hello World 2");
