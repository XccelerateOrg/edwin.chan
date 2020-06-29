import React from 'react'
import {Button,Form,FormGroup,Label,Input} from 'reactstrap'

export default class LinkForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
    }
    handleChange=(e)=>{
        const target = e.target 
        const value = target.value
        const name = target.name
        this.setState({
            [name]:value
        })
        console.log(this.state)
    }
    handleSubmit= (e)=>{
        e.preventDefault()
        const newLink = this.state
        this.props.addNewLink(newLink)
        console.log(newLink)
    }
    render(){
        return(
            <div>
            {this.props.active?<Form className='mb-5' onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>Title</Label>
                    <Input type='text' name='title' onChange={this.handleChange}></Input>
                </FormGroup>
                <FormGroup>
                    <Label>URLs</Label>
                    <Input type='text' name='urls' onChange={this.handleChange}></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Tags</Label>
                    <Input type='text' name='tags' onChange={this.handleChange}></Input>
                </FormGroup>
                <Button>Submit</Button>
            </Form>:null}
            </div>
        )
    }
}