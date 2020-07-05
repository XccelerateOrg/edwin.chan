export const ADD_LINK_ACTION = "ADD_LINK_ACTION";
export const REMOVE_LINK_ACTION = "REMOVE_LINK_ACTION";
export const CLEAR_LINK_ACTION = "CLEAR_LINK_ACTION";

export const addLinkActionCreator = (title,url) => {
    return {
        type: ADD_LINK_ACTION,
        link: {
            title: title,
            url: url
        }
    }
}

export const clearLinkActionCreator = () => {
    return {
        type: CLEAR_LINK_ACTION,
    }
}

export const removeLinkActionCreator = (i) => {
    console.log(i)
    return {
        index: i,
        type: REMOVE_LINK_ACTION
    }
}