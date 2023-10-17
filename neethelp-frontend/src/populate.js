import fetchYoutubeUrl from "./api"
import './assets/styles.css'
import { formatTitle,getTitlefromUrl } from "./utility"

const createContent = async () => {
    // const url = window.location.href
    const url = 'https://leetcode.com/problems/longest-substring-without-repeating-characters/'
    const content = document.getElementById('content')
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

}


  



const createIframe = async (problemTitle) => {
    const videoId = await fetchYoutubeUrl(problemTitle)
    const iframe = document.createElement('iframe')
    // iframe.setAttribute('src', `https://www.youtube.com/embed/4FUu1uCxEWI`)
    iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}`)
    iframe.setAttribute('allowfullscreen', '')
    iframe.setAttribute('frameborder', '0')
    
    return iframe
}

export {createContent, createIframe};