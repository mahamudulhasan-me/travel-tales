import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function main() {
  try {
    // connect with mongodb url
    await mongoose.connect(config.mongodb_url as string);

    app.listen(config.port, () => {
      console.log(`Server is listening port: ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
