const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  emailAddress: { type: String, unique: true, required: true, index: true },
  password: { type: String, required: true },
  userGroup: String,
});

module.exports = mongoose.model("User", UserSchema);
