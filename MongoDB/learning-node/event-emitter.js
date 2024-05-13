const ee = require("events");

const myEmitter = new ee();

myEmitter.on("birthDay", () => console.log("Happy Birth Day"));
myEmitter.on("birthDay", (watch) =>
  console.log(`I Will gift you  a ${watch}!`)
);

myEmitter.emit("birthDay", "smart watch");
