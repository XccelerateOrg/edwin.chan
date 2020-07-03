import * as React from "react";
import { createStore } from "redux";
// import { render } from "react-dom";
import { Provider, connect } from "react-redux";

//Define ADD_LINK and CLEAR_LINK as action creators
import { addLinkActionCreator,clearLinkActionCreator,removeLinkActionCreator} from './actions/Link' 

import {linksReducer} from './reducers/linkReducer'


const rootReducer = () => {
    return linksReducer()
}

const store = createStore(rootReducer);

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
      addLinkMDP:dispatch(addLinkActionCreator('Xccelerate','https://xccelerate.co/')),
      clearLinkMDP:dispatch(clearLinkActionCreator()),
      removeLinkMDP:dispatch(removeLinkActionCreator())
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
