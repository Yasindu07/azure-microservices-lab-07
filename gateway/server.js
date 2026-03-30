const express = require("express");
const cors = require("cors");

const app = express();

// 🔥 Strong CORS fix
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.use(express.json());

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
