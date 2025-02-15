const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    // mongoose.set("strictQuery", true);
    // await mongoose.connect(db, { useNewUrlParser: true });
    await mongoose.connect(db);
    console.log("MongoDB connected.");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
