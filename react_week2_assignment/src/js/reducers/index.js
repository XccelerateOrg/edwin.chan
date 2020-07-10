import { ADD_LINK, SEARCH_LINK, ACTIVE_FORM, FETCH_LINK_REQUEST,FETCH_LINK_SUCCESS,FETCH_LINK_FAILURE } from '../constants/actionTypes'
import faker from 'faker'

const initialState = {
    active: false,
    linkList: [],
    searchList: [],
    profile: { name: faker.name.findName(), image: faker.image.avatar() }
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LINK:
            return {
                ...state,
                linkList: state.linkList.concat(action.payload)
            }
        case ACTIVE_FORM:
            return {
                ...state,
                active: action.payload
            }

        case FETCH_LINK_REQUEST:
            console.log(action.payload)
            return {
                ...state,
                linkList:[...action.payload]
            }

        case SEARCH_LINK:
            console.log(action.payload)
            if (action.payload) {
                const searchLink = state.linkList.filter(list =>
                    list.name.includes(action.payload) || list.tags.includes(action.payload)
                )
                return {
                    ...state,
                    searchList: searchLink
                }
            }
            else {
                return {
                    ...state,
                    searchList: []
                }
            }

        default:
            return state
    }
}

export default rootReducer