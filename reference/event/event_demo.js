const EventEmitter = require("events");

// Create Class Emitter
class MyEmitter extends EventEmitter {}

// Init Object of Above class
const myEmitter = new MyEmitter();

// Event Listener
myEmitter.on("event", () => console.log("Event Fired"));

myEmitter.emit("event");
