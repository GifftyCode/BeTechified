const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
  // logs every request
  console.log(`${req.method} ${req.url} - ${new Date()}`);
  next(); // Pass to next handler required
});

// ROUT PARAMS
app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.send(id);
});

// QUERRY PARAMS
app.get("/search", (req, res) => {
  const item = req.query.item;
  console.log(item);
  res.send(item);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!!!`);
});
