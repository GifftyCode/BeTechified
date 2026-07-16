require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use((req, res, next) => {
  // logs every request
  console.log(`${req.method} ${req.url} - ${new Date()}`);
  next(); // Pass to next handler required
});

app.post("/echo", (req, res) => {
  res.json({ echoed: req.body });
});

app.get("/", (req, res) => {
  res.send("Hello from express!");
});

app.post("/greet", (req, res) => {
  const { name, age } = req.body;
  if (!name) return res.status(400).send("Name is required");
  res.json({ message: `Hello ${name}! You are ${age || "ageless"}.` });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!!!`);
});
