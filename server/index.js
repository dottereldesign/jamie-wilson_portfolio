require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware and route definitions
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = server;
