import React from 'react'

export default class Timer extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            currentTime:new Date().toLocaleString(),second:0
        }
    }

    componentDidMount(){
         this.timerId = setInterval(this.timeIncrement,1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }

    timeIncrement = () => {
        let newTime = new Date().toLocaleString()
        let newSecond = this.state.second + 1
        this.setState({
            currentTime: newTime,second:newSecond
        })
    }
    
    render(){
        
        return(
            <li>
                <h4>{this.props.name}</h4>
                <p>Now is {this.state.currentTime}, {this.state.second} sec passed</p>
                
            </li>
        )
    }

}