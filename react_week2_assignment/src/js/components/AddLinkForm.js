import React from 'react'
import {Button,Form,FormGroup,Label,Input} from 'reactstrap'
import {addNewLink,fetchLinks} from '../actions/index'
import {connect} from 'react-redux'

const mapStateToProps = (state) =>{
    return {
        active:state.active
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addNewLink:link=>dispatch(addNewLink(link)),
        fetchLinks:()=>dispatch(fetchLinks())
    }
}

 class ConnectedLinkForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id:'',
            name:'',
            url:'',
            tags:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            id: parseInt(new Date().getTime().toString().slice(-5)),
            [e.target.name]:e.target.value
        })
        console.log(this.state)
    }
    handleSubmit= (e)=>{
        e.preventDefault()
        this.props.addNewLink(this.state)
        this.props.fetchLinks()
        this.setState({
            id: '',
            name:'',
            url:'',
            tags:''
        })
    }
    render(){
        return(
            <div>
            {this.props.active?
            <Form className='mb-5' onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>Title</Label>
                    <Input type='text' name='name' value={this.state.name} onChange={this.handleChange}></Input>
                </FormGroup>
                <FormGroup>
                    <Label>URLs</Label>
                    <Input type='text' name='url' value={this.state.url} onChange={this.handleChange}></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Tags</Label>
                    <Input type='text' name='tags' value={this.state.tags} onChange={this.handleChange}></Input>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
            :null}
            </div>
        )
    }
}

export const AddLinkForm = connect(mapStateToProps,mapDispatchToProps)(ConnectedLinkForm)