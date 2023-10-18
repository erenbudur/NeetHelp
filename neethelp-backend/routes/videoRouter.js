var express = require("express");
var router = express.Router();
require("../database/db.js");
const { getYoutubeVideo } = require("../api/youtube.js");
var cors = require('cors')

const {
  getAllVideos,
  addVideo,
  getVideo,
} = require("../controller/videoController.js");



const corsOptions = {
  origin: process.env.USER_DOMAIN,
  optionsSuccessStatus: 200
}



router.get("/:title",cors(corsOptions), async (req, res) => {
  const title = req.params.title;
  // Attempt to get from database
  const video = await getVideo(title);
  if (video.length > 0) {
    console.log("video found in database");
    res.json(video);
  } else {
    // Attempt to get from YouTube
    const data = await getYoutubeVideo(title);
    if (data) {
      dpData = {
        leetcodeID: data.number,
        leetcodeTitle: title,
        youtubeID: data.videoId,
        youtubeTitle: data.title,
        channel: data.channelTitle,
      };
      const video = await addVideo(dpData);
      res.json(await getVideo(title));
    } else {
      res.status(204).json({ message: "Video not found" });
    }
  }
});

router.get("/", async (req, res) => {
  try {
    const videos = await getAllVideos();
    res.json(videos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const body = req.body;
    const video = await addVideo(body);
    res.status(201).json(video);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
module.exports = router;
