import * as React from "react";
import { render } from "react-dom";
import { Provider, connect } from "react-redux";
import { store } from "./store";
import {
  addLinkActionCreator,
  clearLinkActionCreator,
  loadLinkThunk
} from "./actions/link";

const PureLinkList = props => {
  return (
    <div>
      <button onClick={props.reloadLinkMDP}>Reload</button>
      <button onClick={props.addLinkMDP}>New Link</button>
      <button onClick={props.clearLinkMDP}>Clear</button>
      <ul>
        {props.linksMSP.map((l, i) => (
          <li key={i}>
            {l.craft} - {l.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProp = state => {
  return {
    linksMSP: state.linkStore.linksReducer
  };
};

// Add the `mapDispatchToProp`
const mapDispatchToProp = dispatch => {
  return {
    addLinkMDP: () =>
      dispatch(addLinkActionCreator("ISS", "123")),
    clearLinkMDP: () => dispatch(clearLinkActionCreator()),
    reloadLinkMDP: () => dispatch(loadLinkThunk())
  };
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

render(<App />, document.getElementById("root"));
