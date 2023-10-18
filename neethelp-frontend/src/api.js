const fetchYoutubeUrl = async (searchTerm) => {
    const url = `http://localhost:3000/video/${searchTerm}`
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);
        const id = data[0].youtubeID
        return id
    }
    catch (err) {
        console.log(err)
    }
   
}

export default fetchYoutubeUrl
