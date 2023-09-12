const url = require("url");

const myUrl = new URL(
  "https://www.youtube.com:8080/?id=181319&status=graduate"
);

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (Root Domain)
console.log("Host " + myUrl.host);
console.log("Host Name: " + myUrl.hostname); // No Port

// Path Name
console.log(myUrl.pathname);

// Serialized Query
console.log(myUrl.search);
console.log(myUrl.searchParams);

// Add Params
myUrl.searchParams.append("loaded", "true");
console.log(myUrl.searchParams);

// Loop Through Params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
