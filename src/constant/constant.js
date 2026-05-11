const PathSet = Object.freeze({
    HOMELAND: "/",
    WORKSPACE: "/workspace",
    EDITPAGE: "/edit/:mode/:pageId"
})

const PageStatus = Object.freeze({
    EDITING: "PageStatusEDITING",
    READING: "PageStatusREADING"
})

export default {
    PathSet,
    PageStatus
}