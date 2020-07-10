import {FETCH_LINK_REQUEST,FETCH_LINK_SUCCESS,FETCH_LINK_FAILURE} from '../constants/actionTypes'



 const fetchLinks = () => (dispatch,getState) => {
    dispatch(fetchLinkReuest())
    axios.get('http://localhost/4000/api/links')
    .then(res=>{
        const linkList = res.data
        dispatch(fetchLinkSucess(linkList))
    })
    .catch(err=>{
        dispatch(fetchLinkFailure(err.message))
    })
    dispatch({type: FETCH_LINK_REQUEST, payload:res})
}

