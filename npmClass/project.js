require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.get("/", (req, res) => res.send("Welcome to User API..."));

app.post("/register", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email)
    return res.status(400).json({ error: "Missing email or name" });

  res.status(201).json({ message: `Registered: ${name} (${email})` });
});

app.get("/user/:id", (req, res) => {
  res.status(200).json({ id: req.params.id, name: "Sample User!" });
});

app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`);
});
