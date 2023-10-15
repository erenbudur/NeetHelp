require("dotenv").config();
import("node-fetch");

const youtubeAPI = process.env.GOOGLE_API_KEY;
const neetcodeID = process.env.NEETCODE_CHANNEL_ID;
const neetcodeIOID = process.env.NEETCODE_CHANNEL_IO_ID;

const getYoutubeVideo = async (query) => {
  let url1 = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${query}&channelId=${neetcodeID}&key=${youtubeAPI}`;
  let url2 = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${query}&channelId=${neetcodeIOID}&key=${youtubeAPI}`;

  let response = await fetch(url1);
  let data = await response.json();
  if (data.items.length === 0) {
    response = await fetch(url2);
    data = await response.json();
  }
  if (data.items.length === 0) {
    return null;
  }
  return parseVideo(data);
};

const parseVideo = (data) => {
  const video = data.items[0];
  const videoId = video.id.videoId;
  const title = video.snippet.title;
  const regex = "Leetcode ([0-9]+) ";

  const match = title.match(regex);
  const number = match ? match[1] : null;

  return { videoId, title, number };
};

module.exports = { getYoutubeVideo };
