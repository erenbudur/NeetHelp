import fetchYoutubeUrl from "./api"
import './assets/styles.css'
import { formatTitle,getTitlefromUrl,getCurrentUrl } from "./utility"

const createContent = async () => {
    const url =  getCurrentUrl()
    const content = document.createElement("div")
    content.setAttribute('id', 'content')
    const title = document.createElement('h1')
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
    const iframe = document.createElement('iframe')
    iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}`)
    iframe.setAttribute('title', 'YouTube video player')
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture, fullscreen')
    iframe.setAttribute('frameborder', '0')
    
    return iframe
}

export {createContent, createIframe};