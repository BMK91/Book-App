const express = require("express");
const connectDB = require("./config/db");
const books = require("./routes/api/books");
const cors = require("cors");
const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/books", books);

const port = process.env.port || 8082;

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
