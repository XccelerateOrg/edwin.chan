import * as React from "react";
import { createStore,applyMiddleware } from "redux";
import logger from 'redux-logger'
// import { render } from "react-dom";
import { Provider, connect } from "react-redux";

//Define ADD_LINK and CLEAR_LINK as action creators
import { addLinkActionCreator,clearLinkActionCreator,removeLinkActionCreator} from './actions/Link' 

import {linksReducer,initalState} from './reducers/linkReducer'



const rootReducer = (state = initalState, action) => {
    return linksReducer(state,action)
}

const store = createStore(rootReducer,applyMiddleware(logger));

const PureLinkList = props => {
  return (
    <div>
      <button onClick={props.addLinkMDP}>New Link</button>
      <button onClick={props.clearLinkMDP}>Clear Links</button>
      {props.linksMSP.map((l, i) => (
        <div key={i}>
          {" "}
          {l.title} - {l.url}{" "}
          <button onClick={()=>props.removeLinkMDP(i)}>Remove Link</button>
        </div>
      ))}
    </div>
  );
};

// Give the component access to the state of our links
const mapStateToProp = state => {
  return {
    linksMSP: state.linksReducer
  };
};

// Add the `mapDispatchToProp` so functions can update the redux store.
const mapDispatchToProp = (dispatch) => {
  return {
      addLinkMDP:()=> dispatch(addLinkActionCreator('Xccelerate','https://xccelerate.co/')),
      clearLinkMDP:()=>dispatch(clearLinkActionCreator()),
      removeLinkMDP:(i)=>dispatch(removeLinkActionCreator(i))
  }   
};

// Link with connect()
const LinkList = connect(
  mapStateToProp,
  mapDispatchToProp
)(PureLinkList);

const App = () => (
  <Provider store={store}>
    <div>
      <h2>Links</h2>
      <LinkList />
    </div>
  </Provider>
);

export default App;
