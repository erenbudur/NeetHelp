const fetchYoutubeUrl = async (searchTerm) => {

    const videoId = await chrome.runtime.sendMessage({ action: 'getVideoID', title: searchTerm });

    if (videoId) {
        return videoId
    }


    const url = `http://localhost:3000/video/${searchTerm}`
    try {
        const response = await fetch(url)
        if (response.status === 200) {
        const data = await response.json()
        const id = data[0].youtubeID
        chrome.runtime.sendMessage({ action: 'setVideoID', title: searchTerm, videoID: id });
        return id
        } else if (response.status === 204) {
            return 204
        }
        else {
            throw new Error('Unable to fetch video')
        }

    }
    catch (err) {
        console.log(err)
    }
   
}

export default fetchYoutubeUrl
