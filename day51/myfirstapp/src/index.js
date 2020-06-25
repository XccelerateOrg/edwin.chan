import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import logo from './logo.png';
import  './index.css'



const ele =
  (<body><header>
    <h1>Simple Website</h1>
  </header>
    <section>
      This is a simple website made without React. Try to convert this into React enabled.

            <ol>
        <li>First, you need to use <span className="command">create-react-app</span></li>
        <li>Second, you need to run <span className="command">npm start</span></li>
      </ol>
    </section>
    <footer>
      <img src={logo} style={{height:'300px',width:'300px'}} />
    </footer>
  </body>
  );


ReactDOM.render(
  ele,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
