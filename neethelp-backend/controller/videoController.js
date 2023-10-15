const Video = require("../models/Video");

async function getAllVideos() {
  try {
    const videos = await Video.find();
    return videos;
  } catch (error) {
    throw new Error(error);
  }
}

async function addVideo(data) {
  try {
    const newVideo = new Video(data);
    await newVideo.save();
    return newVideo;
  } catch (error) {
    throw new Error(error);
  }
}

async function getVideo(id) {
  try {
    const video = await Video.find({ leetcodeID: id })
    return video;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = { getAllVideos, addVideo, getVideo };
