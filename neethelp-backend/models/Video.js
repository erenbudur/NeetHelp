const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  leetcodeTitle: {
    type: String,
    required: true,
  },
  leetcodeID: {
    type: String,
    required: true,
  },
  youtubeTitle: {
    type: String,
    required: true,
  },
  youtubeID: {
    type: String,
    required: true,
  },
  channel: {
    type: String,
    required: true,
  },
  addedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Video", videoSchema);
