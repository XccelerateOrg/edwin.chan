import React from 'react';
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Clock from './components/Clock'
import LeaderBoard from './components/LeaderBoard'
import Questioner from './components/Questioner'
import Timer2 from './components/Timer2'

const Home = () => (
  <div><h1> Home</h1></div>
)



class App extends React.Component {
  constructor(props) {
    super(props)
    props.history.listen(location => {
      console.log(location)

      switch (location.pathname) {
        case '/': document.title = 'Home'; break;
        case '/Clock': document.title = 'Clock'; break;
        case '/LeaderBoard': document.title = 'LeaderBoard'; break;
        case '/Questioner': document.title = 'Questioner'; break;
        case '/Timer': document.title = 'Timer'; break;
        default: break;
      }
    })
  }

  handleClick = () =>{
    this.props.history.goBack()
  }
  render() {
    return (
      <div className="container">
        <ul>
          <li>
            <NavLink to="/donald" exact activeStyle={{
              fontWeight: 'bold',
              color: 'red'
            }}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/Clock" activeStyle={{
              fontWeight: 'bold',
              color: 'red'
            }}>Clock</NavLink>
          </li>
          <li>
            <NavLink to="/LeaderBoard"activeStyle={{
              fontWeight: 'bold',
              color: 'red'
            }}>LeaderBoard</NavLink>
          </li>
          <li>
            <NavLink to="/Questioner"activeStyle={{
              fontWeight: 'bold',
              color: 'red'
            }}>Questioner</NavLink>
          </li>
          <li>
            <NavLink to="/Timer" activeStyle={{
              fontWeight: 'bold',
              color: 'red'
            }}>Timer</NavLink>
          </li>

        </ul>
        {/* The corresponding component will show here if the current URL matches the path */}
        <Route path="/:username" exact component={Home} />
        <Route path="/Clock" component={Clock} />
        <Route path="/LeaderBoard" component={LeaderBoard} />
        <Route path="/Questioner" component={() => <Questioner question='who are you' />} />
        <Route path="/Timer" component={() => <Timer2 />} />
        <Redirect to='/'></Redirect>
        <button onClick={this.handleClick} > Go Back Last Page</button>
      </div>
    )
  }
}

export default withRouter(App);
