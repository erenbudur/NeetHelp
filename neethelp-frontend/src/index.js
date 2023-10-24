
import './assets/popup-styles.css';

const createPopup = () => {

    const popup = document.getElementById('pop-up');
    const instructions = document.createElement('div');
    const neetcode = document.createElement('div');
    const neetcodeText = document.createElement('p');
    const linksContainer =  document.createElement('div');
    const neetcodeLink = document.createElement('a');
    const youtubeLogo = document.createElement('img');
    youtubeLogo.src = require('./assets/logo-youtube.svg');

    instructions.setAttribute('id', 'instructions');
    neetcode.setAttribute('id', 'neetcode');
    neetcodeText.setAttribute('id', 'neetcode-text');
    linksContainer.setAttribute('id', 'links-container');
    neetcodeLink.setAttribute('id', 'neetcode-link');
    youtubeLogo.setAttribute('id', 'youtube-logo');


    neetcodeLink.onclick = () => {
        chrome.tabs.create({url: 'https://www.neetcode.io'});
    }
    youtubeLogo.onclick = () => {
        chrome.tabs.create({url: 'https://www.youtube.com/@NeetCode'});
    }
   
    neetcodeText.textContent = 'Checkout NeetCode.io and NeetCode on youtube for more content!';
    neetcodeLink.textContent = 'NeetCode.io';
    instructions.innerHTML = 'Click on the <span>NeetHelp</span> button to view the video solution!';
    
    linksContainer.appendChild(neetcodeLink);
    linksContainer.appendChild(youtubeLogo);

    neetcode.appendChild(neetcodeText);
    neetcode.appendChild(linksContainer);


    popup.appendChild(instructions);
    popup.appendChild(neetcode);

}


createPopup();