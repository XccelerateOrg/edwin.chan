import { ADD_LINK_ACTION, CLEAR_LINK_ACTION, REMOVE_LINK_ACTION} from '../actions/Link'

export const initalState = {
    linksReducer: []
  };

export const linksReducer = (state = initalState, action) => {
    switch (action.type) {
      case ADD_LINK_ACTION:
        return {
          linksReducer: state.linksReducer.concat([action.link])
        };
      case CLEAR_LINK_ACTION:
        return {
          linksReducer: []
        };
      case REMOVE_LINK_ACTION:
        return{
          linksReducer: [...state.linksReducer.slice(0,action.index),
            ...state.linksReducer.slice(action.index+1)]
        };
      default:
        return state;
    }
  };