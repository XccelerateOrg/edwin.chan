import * as React from "react";
import { createStore } from "redux";
// import { render } from "react-dom";
import { Provider, connect } from "react-redux";

const rootReducer = state => {
  return {
    linksRootReducer: [
      { title: "Google", url: "https://www.google.com" },
      { title: "Yahoo", url: "https://www.yahoo.com" },
      { title: "Facebook", url: "https://www.facebook.com" },
      { title: "HKO", url: "https://www.hko.gov.hk" },
      { title: "DuckDuckGo", url: "https://www.duckduckgo.com" }
    ],
    users:[
      {name:'a'},
      {name:'b'},
      {name:'c'},
    ]
  };
};

const store = createStore(rootReducer);

const PureLinkList = props => {
  return (
    <div>
      {props.linksMSP.map(l => (
        <div>
          {l.title} - {l.url}
        </div>
      ))}
    </div>
  );
};

const PureUserList = props => {
  return (
    <div>
      {props.usersMSP.map(l => (
        <div>
          {l.name}
        </div>
      ))}
    </div>
  );
};



const mapStateToProps = state => {
  return {
    linksMSP: state.linksRootReducer,
    usersMSP: state.users
  };
};

const UserList = connect(mapStateToProps)(PureUserList);
const LinkList = connect(mapStateToProps)(PureLinkList);

const App = () => (
  <Provider store={store}>
    <div>
      <h2>Links</h2>
      <UserList />
      <LinkList />
    </div>
  </Provider>
);

export default App;
