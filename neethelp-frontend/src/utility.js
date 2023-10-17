


const formatTitle = (title) => {
    // split the title by the - character and capitalize each word
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


export {formatTitle, getTitlefromUrl};