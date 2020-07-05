import axios from "axios";

export const ADD_LINK_ACTION = "ADD_LINK_ACTION";

export const CLEAR_LINK_ACTION = "CLEAR_LINK_ACTION";

export const LOAD_LINK_SUCCESS_ACTION = "LOAD_LINK_SUCCESS_ACTION";

export const LOAD_LINK_FAILURE_ACTION = "LOAD_LINK_FAILURE_ACTION";

export function addLinkActionCreator(craft, name) {
  return {
    type: ADD_LINK_ACTION,
    link: {
      craft: craft,
      name: name
    }
  };
}

export function clearLinkActionCreator() {
  return {
    type: CLEAR_LINK_ACTION
  };
}

export function loadLinkSuccessActionCreator(links) {
  return {
    type: LOAD_LINK_SUCCESS_ACTION,
    links: links
  };
}

export function loadLinkFailureActionCreator() {
  return {
    type: LOAD_LINK_FAILURE_ACTION
  };
}

export function loadLinkThunk() {
  return dispatch => {
    return axios("http://api.open-notify.org/astros.json")
      .then(res => {
        let threads = res.data;
        console.log(threads);

        let links = threads.people.map(t => ({
          craft: t.craft,
          name: t.name
        }));
        dispatch(loadLinkSuccessActionCreator(links));
      })
      .catch(err => {
        console.log("failed", err);
        dispatch(loadLinkFailureActionCreator());
      });
  };
}
