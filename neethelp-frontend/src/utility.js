


const formatTitle = (title) => {
    const titleArray = title.split('-')
    const formattedTitle = titleArray.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    })
    return formattedTitle.join(' ')
}

const getTitlefromUrl = (url) => {
    const regex = /problems\/([-\w]+)\//
    const match = url.match(regex)
    return match[1]
}

const getCurrentUrl =  () => {
  return document.location.href;
};


export {formatTitle, getTitlefromUrl, getCurrentUrl};