const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  leetcode: {
    type: String,
    required: true,
  },
  youtubeURL: {
    type: String,
    required: true,
  },
  channel: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Video", videoSchema);
