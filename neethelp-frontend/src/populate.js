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

    const iframe = await createIframe(formattedTitle)
    content.appendChild(iframe)

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