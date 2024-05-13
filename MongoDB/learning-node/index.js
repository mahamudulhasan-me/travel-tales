const { error } = require("console");
const { add } = require("./local.js");
const fs = require("fs");
const result = add(2, 3);

const readFile = fs.readFile("./text/read.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

const writeFile = fs.writeFile(
  "./text/write.txt",
  "This test is write asynchronously",
  "utf-8",
  (err, data) => {
    if (err) throw err;
  }
);
