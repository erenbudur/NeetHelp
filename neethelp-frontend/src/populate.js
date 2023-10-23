import fetchYoutubeUrl from "./api"
import './assets/styles.css'
import { formatTitle,getTitlefromUrl,getCurrentUrl } from "./utility"

const createContent = async () => {
    const url =  getCurrentUrl()
    const content = document.createElement("div")
    content.setAttribute('id', 'content')
    const title = document.createElement('h1')
    title.setAttribute('id', 'title-neethelp')
    const formattedTitle = getTitlefromUrl(url)
    title.textContent = formatTitle(formattedTitle)
    content.appendChild(title)

    const outerVideoContainer = document.createElement('div')
    outerVideoContainer.classList.add('outer-video-container')
    const videoContainer = document.createElement('div')
    videoContainer.classList.add('video-container')
    const iframe = await createIframe(formattedTitle)
    videoContainer.appendChild(iframe)
    outerVideoContainer.appendChild(videoContainer)
    content.appendChild(outerVideoContainer)
    return content

}


  



const createIframe = async (problemTitle) => {
    const videoId = await fetchYoutubeUrl(problemTitle)
    if (videoId === 204) {
        const error = document.createElement('h1')
        error.setAttribute('id', 'error')
        error.textContent = 'No video found \r\n Try again later'
        error.style.fontWeight = '900'
        error.style.fontSize = '3rem'
        error.style.whiteSpace = 'pre'
        return error
    }
    const iframe = document.createElement('iframe')
    iframe.setAttribute('id', 'yt-player')
    iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}`)
    iframe.setAttribute('title', 'YouTube video player')
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;')
    iframe.setAttribute('allowfullscreen', '')
    iframe.setAttribute('frameborder', '0')
    
    return iframe
}



export {createContent, createIframe};