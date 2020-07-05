import {
    ADD_LINK_ACTION,
    CLEAR_LINK_ACTION,
    LOAD_LINK_SUCCESS_ACTION,
    LOAD_LINK_FAILURE_ACTION
  } from "../actions/link";
  
  const initialState = {
    linksReducer: []
  };
  
  export const linkReducer = (
    state = initialState,
    action /* add parameter here */
  ) => {
    // Use switch to handle different actions
    switch (action.type) {
      case ADD_LINK_ACTION:
        return { linksReducer: state.linksReducer.concat([action.link]) }; // Use concat to add a new link
      case CLEAR_LINK_ACTION:
        return { linksReducer: [] }; // Reset the link
      case LOAD_LINK_SUCCESS_ACTION:
        //return state.concat([action.links]); // Override the links
        return { linksReducer: state.linksReducer.concat([...action.links]) };
      case LOAD_LINK_FAILURE_ACTION:
        return { linksReducer: [] }; // Override the links
      default:
        return state; // Do not change the state in case of any other actions
    }
  };
  