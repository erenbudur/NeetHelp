const fetchYoutubeUrl = async (searchTerm) => {
    const url = `http://localhost:3000/video/${searchTerm}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export default fetchYoutubeUrl
