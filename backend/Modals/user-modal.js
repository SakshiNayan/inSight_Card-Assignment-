const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  username: { type: String },
  email : {type: String, unique :true},
  password: { type: String },
});

const UserModel = mongoose.model("User", Schema);
module.exports = UserModel;