var express = require("express");
var router = express.Router();
const mongoose = require("../database/db.js");

const {
  getAllVideos,
  addVideo,
  getVideo,
} = require("../controller/videoController.js");
/* GET home page. */
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
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const video = await getVideo(id);
    res.json(video);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
