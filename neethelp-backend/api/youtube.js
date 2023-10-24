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
  let found = false;
  if (data.items.length > 0) {
    if (await checkDescription(query, data.items[0].id.videoId)) {
      found = true;
    }
  }

  if (!found) {
    response = await fetch(url2);
    data = await response.json();
    if (data.items.length > 0) {
      if (await checkDescription(query, data.items[0].id.videoId)) {
        found = true;
      }
    }
  }
  return found ? parseVideo(data) : null;
};

const checkDescription = async (query, videoId) => {
  const descUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${youtubeAPI}`;
  const response = await fetch(descUrl);
  const descData = await response.json();
  const description = descData.items[0].snippet.description;
  const regex = `${query}`;
  const match = description.match(regex);
  return match != null;
};

const parseVideo = (data) => {
  const video = data.items[0];
  const videoId = video.id.videoId;
  const title = video.snippet.title;
  const channelTitle = video.snippet.channelTitle;
  const regex = "Leetcode ([0-9]+)";

  const match = title.match(regex);
  const number = match ? match[1] : null;

  return { videoId, title, number, channelTitle };
};

module.exports = { getYoutubeVideo };
