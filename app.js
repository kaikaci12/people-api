const express = require("express");
const app = express();
const PORT = process.env.port || 3000;
const path = require("path");

const peopleRouter = require("./router/people");
const auth = require("./router/auth");
app.use(express.static("./methods-public"));
//post and get
app.use(express.json());
app.use("/api/people", peopleRouter);
app.use("/login", auth);

app.listen(3000, () => {
  console.log(`server is running on port ${PORT}`);
});
