import React from 'react'

export default class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentTime:new Date().toLocaleString()}
    }
    
    componentDidMount(){
       this.timer = setInterval(this.updateTime,1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
      }

    updateTime = () =>{
        this.setState({
            currentTime:new Date().toLocaleString()
        })
    }
    render(){
        
        const {currentTime} = this.state
        return (

            <div>
                {currentTime}
            </div>
        )
    }
}