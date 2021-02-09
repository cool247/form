const express = require("express");
const path = require("path");
const UserModel = require("./model/userModel");
const bodyParser = require("body-parser");
const app = express();
require("./db/mongoose");

app.use("/static", express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/post", async (req, res) => {
  try {
    const user = new UserModel({
      email: req.body.email,
      pass: req.body.pass,
    });
    await user.save();
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000);
