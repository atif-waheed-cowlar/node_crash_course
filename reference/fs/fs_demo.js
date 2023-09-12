const fs = require("fs");
const path = require("path");

// Create a Folder
fs.mkdir(path.join(__dirname, "/test"), {}, (error) => {
  if (error) {
    if (error.code == "EEXIST") {
      console.log("Folder Already Exist...");
      return;
    }
    console.log("Error on Creation of Folder...");

    throw error;
  }

  console.log("Folder Created...");
});

// Creating and Writing to File
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World!",
  (error) => {
    if (error) {
      console.log("Error on Creation of Folder...");

      throw error;
    }

    console.log("File Written...");
  }
);

// Append in File
fs.appendFile(
  path.join(__dirname, "/test", "hello.txt"),
  " I Love Node.js ",
  (error) => {
    if (error) {
      console.log("Error on Creation of Folder...");

      throw error;
    }

    console.log("File Written to...");
  }
);

// Read File
fs.readFile(
  path.join(__dirname, "/test", "hello.txt"),
  "utf-8",
  (error, data) => {
    if (error) {
      console.log("Error on Creation of Folder...");

      throw error;
    }

    console.log("File Read: " + data);
  }
);

// Rename File
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "my_text.txt"),
  (error) => {
    if (error) {
      console.log("Error on Creation of Folder...");
      throw error;
    }

    console.log("File Renamed...");
  }
);
