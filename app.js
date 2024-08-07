const express = require("express");
const app = express();
const PORT = process.env.port || 3000;
const path = require("path");

const peopleRouter = require("./router/people");

app.use(express.static("./methods-public"));
//post and get
app.use(express.json());
app.use("/api/people", peopleRouter);
app.get("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.send(`welcome ${name}`);
  }
});
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`welcome ${name}`);
  }
});

app.listen(3000, () => {
  console.log(`server is running on port ${PORT}`);
});
