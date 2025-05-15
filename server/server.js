require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for JSON body parsing and CORS
app.use(cors());
app.use(express.json());

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
