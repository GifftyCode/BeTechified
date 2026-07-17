require("dotenv").config();

const express = require("express");

const path = require("path");

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.use((req, res, next) => {
  console.log(`${req.method} - ${req.url}`);
  next();
});

app.use(express.static(path.join(__dirname, "public")));

app.post("/user", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) return res.status(400).json({ error: "Missing fields" });

  res.status(201).json({ status: "success", message: `Hello ${name}` });
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  res.send(`User ${id} profile`);
});

app.listen(PORT, () => {
  console.log(`Listening to server on port ${PORT}`);
});
