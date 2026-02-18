const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 10000;

// Health check
app.get("/", (req, res) => {
  res.json({ status: "Indixa Backend Running ✅" });
});

// Test API
app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Test User 1" },
    { id: 2, name: "Test User 2" }
  ]);
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});