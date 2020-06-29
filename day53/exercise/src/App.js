import React from 'react';
import RandomN from 'node-random-name'
import logo from './logo.svg';
import Timer from './components/Timer';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      counter:[]
  }
}
  handleClickCreate = () =>{
    let newCounter = [{name:RandomN({seed:Math.random()})}]
    let newArray = [... this.state.counter].concat(newCounter)
    console.log()
    this.setState({
      counter:newArray
    })
  }
  render(){
  return (
    <div className="App">
      {this.state.counter.map((counter,i)=><div> <Timer name={counter.name}/></div>)}
      <button onClick={this.handleClickCreate}>Create New Timer</button>
    </div>
  );
  }
}

export default App;
