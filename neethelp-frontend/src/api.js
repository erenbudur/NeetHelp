import { getVideoID, setVideoID } from "./utility";

const fetchYoutubeUrl = async (searchTerm) => {

  let videoId = await getVideoID(searchTerm);
  if (videoId) {
  
    return videoId;
  } else {
    const url = `https://neethelp.onrender.com/video/${searchTerm}`;
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        const id = data[0].youtubeID;
        await setVideoID(searchTerm, id);
        return id;
      } else if (response.status === 204) {
        return 204;
      } else {
        throw new Error("Unable to fetch video");
      }
    } catch (err) {
      console.log(err);
    }
  }
};

export default fetchYoutubeUrl;
