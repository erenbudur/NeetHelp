const formatTitle = (title) => {
  const titleArray = title.split("-");
  const formattedTitle = titleArray.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return formattedTitle.join(" ");
};

const getTitlefromUrl = (url) => {
  const regex = /problems\/([-\w]+)\//;
  const match = url.match(regex);
  return match[1];
};

const getCurrentUrl = () => {
  return document.location.href;
};

const getVideoID = async (title) => {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(title, function(result) {
          if (chrome.runtime.lastError) {
            reject(chrome.runtime.lastError);
          } else if (title in result) {
            resolve(result[title]);
          } else {
            resolve(null);
          }
        });
      });
};


const setVideoID = async (title, videoID) => {
  chrome.storage.local.set({ [title]: videoID }, () => {
    console.log("video id set", videoID);
  });
};
export { formatTitle, getTitlefromUrl, getCurrentUrl, getVideoID, setVideoID };
