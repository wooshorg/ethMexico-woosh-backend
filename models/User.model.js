const mongoose = require("mongoose");

const User = new mongoose.Schema({
  address: {
    type: String,
    required: true,
    unique: true,
  },
  worldcoin_hash: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("User", User);
