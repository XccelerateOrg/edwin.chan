import React from 'react'
import { Button } from 'reactstrap'

export default class AddLink extends React.Component {
    constructor(props){
        super(props)
        this.state={
        links :[] 
        }
    }

    handleClickButton = () =>{
        let newLink = [... this.state.links]
        
    }
    rende
    render() {
        return (
            <Button color='info'>Add Link</Button>
        )
    }
}