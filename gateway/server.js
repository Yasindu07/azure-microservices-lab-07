const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Gateway Service Running 🚀");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Gateway API 👋" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
