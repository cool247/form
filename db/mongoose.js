const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/gks-3", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;

db.once("open", () => {
  console.log("db connected");
});
