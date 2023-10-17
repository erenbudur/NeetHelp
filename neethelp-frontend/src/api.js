const fetchYoutubeUrl = async (searchTerm) => {
    const url = `http://localhost:3000/video/${searchTerm}`
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    }
    catch (err) {
        console.log(err)
    }
   
}

export default fetchYoutubeUrl
