import React from 'react'

export default class Questioner extends React.Component{
    constructor(props){
        super(props)
        this.state={
            answer:""
        }
        
    }



    promptQuestion = () =>{
        let question = this.props.question
        let answer = prompt(question)
        this.setState({answer})
        console.log(answer)

    }

    render(){
        return (
            <div>
                <button onClick={this.promptQuestion}></button>
                <p>{this.state.answer}</p>
            </div>
        )
    }
}