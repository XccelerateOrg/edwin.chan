import React from 'react'

export default class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentTime:new Date().toLocaleString()}
    }
    componentDidMount(){
       setInterval(this.updateTime,1000)
    }

    componentWillUnmount() {
        clearInterval(this.updateTime)
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