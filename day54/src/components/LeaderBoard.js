import RandomName from 'node-random-name'

import React from 'react';

import Counter from './Counter'

class LeaderBoard extends React.Component{
    constructor(props){
      super(props)
      this.state={
         counters: [{name:RandomName({seed: Math.random()}),count:0},{name:RandomName({seed: Math.random()}),count:2}],
      }
   }
   handleClickPlus(i){
     let newObj = {...this.state.counters[i], count: this.state.counters[i].count +1 }
     let newArray = [...this.state.counters];       // construct a new array instead of mutating this.state.counters (immutability !!!!)
     newArray[i] = newObj;
     this.setState({
          counters: newArray
      })
   }

  handleClickMinus(i){
let newObj = {...this.state.counters[i], count: this.state.counters[i].count -1 }
let newArray = [...this.state.counters];
newArray[i] = newObj
     this.setState({
       counters: newArray
     })
   }

   handleClickCreate(){
       let newCounter = [{name:RandomName({seed:Math.random()}),count:0}]
       let newArray = [...this.state.counters].concat(newCounter)
       console.log(newArray)
       this.setState({
           counters:newArray
       })
   }

   handleClickRemove(i){
       let newArray = [...this.state.counters]
       newArray.splice(i,1)
       console.log(newArray)
       this.setState({
        counters:newArray
    })

   }
   render(){
       this.state.counters.sort((a,b)=>b.count-a.count)
       return (
         <div>    
             {this.state.counters.map((counter,index)=>  <Counter count={counter.count} name={counter.name} key={index}
               onPlusButtonClicked ={()=> this.handleClickPlus(index)}
             onMinusButtonClicked ={()=> this.handleClickMinus(index)}
                 onRemoveButtonClicked = {()=>this.handleClickRemove(index)}
             />)}
             <button onClick = {()=>this.handleClickCreate()}>add button</button>
            
        </div>
       );
  }
}
export default LeaderBoard;