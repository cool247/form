const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  pass: String,
});

module.exports = mongoose.model("User", userSchema);
