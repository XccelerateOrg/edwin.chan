import React from 'react';
import RandomN from 'node-random-name'
import Timer from './Timer';

export default class Timer2 extends React.Component {
  constructor(){
    super();
    this.state = {
      counter:[]
  }
}
  handleClickCreate = () =>{
    let newCounter = [{name:RandomN({seed:Math.random()})}]
    let newArray = [...this.state.counter].concat(newCounter)
    console.log()
    this.setState({
      counter:newArray
    })
  }
  render(){
  return (
    <div>
      <ul>
      {this.state.counter.map((counter,i)=> <Timer key={i} name={counter.name}/>)}
      </ul>
      <button onClick={this.handleClickCreate}>Create New Timer</button>
    </div>
  );
  }
}
