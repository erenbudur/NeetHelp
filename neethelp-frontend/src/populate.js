import fetchYoutubeUrl from "./api"
import './assets/styles.css'

const createContent = (problemTitle) => {
    const content = document.getElementById('content')
    const title = document.createElement('h1')
    
}


  



const createIframe = async (problemTitle) => {
    const videoId = await fetchYoutubeUrl(problemTitle)
    const iframe = document.createElement('iframe')
    iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}`)
    iframe.setAttribute('allowfullscreen', '')
    iframe.setAttribute('frameborder', '0')
    iframe.style.width = '100%'
    iframe.style.height = '100%'
    return iframe
}

export {createContent, createIframe};