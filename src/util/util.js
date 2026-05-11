function getPagePath(pageId, pageStatus) {
    return "/edit" + "/" + pageStatus + "/" + pageId
}

export default {
    getPagePath
}
