const express = require("express");

const app = express();

const PORT = 3000;

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!!!`);
});
