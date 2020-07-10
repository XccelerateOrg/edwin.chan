import { ADD_LINK, SEARCH_LINK, ACTIVE_FORM, FETCH_LINK_REQUEST } from '../constants/actionTypes'
import axios from 'axios'

export const addNewLink = (payload) => async (dispatch) => {
    const res = await axios.post('/api/addLink',payload)
    dispatch({ type: ADD_LINK, payload })
};

export const searchLink = (payload) => {
    return { type: SEARCH_LINK, payload }
}

export const activateForm = (payload) => {
    return { type: ACTIVE_FORM, payload }
}

export const fetchLinks = () => async (dispatch, getState) => {
    const res = await axios.get('/api/links')
    dispatch({ type: FETCH_LINK_REQUEST, payload: res.data })
}