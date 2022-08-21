const mongoose = require("mongoose");

const User = new mongoose.Schema({
  address: {
    type: String,
  },
  worldcoin_hash: {
    type: String,
  },
  username: {
    type: String,
  },
  image_url: {
    type: String,
  },
});

module.exports = mongoose.model("User", User);
