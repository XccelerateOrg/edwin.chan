import React from 'react'
import { Input,Button} from 'reactstrap'
import {connect} from 'react-redux'
import {searchLink} from '../actions/index'

const mapDispatchToProps = (dispatch)=>{
    return {      
        clickSearch:key=>dispatch(searchLink(key))
    }
} 

export default class ConnectedSearchLink extends React.Component {
    constructor(props){
        super(props)
        this.state={
            key:''
        }
    }
    handleChange = (e) =>{ 
        this.setState({
            key:e.target.value
        })
    }
    handleSearch = () =>{
        let {key} =this.state
        this.props.clickSearch(key)
        this.setState({
            key:''
        })
    }
    render() {
        return (
            <div className='ml-auto m-3 '>
                <Input
                    onChange={this.handleChange}
                    className='w-50 d-inline'
                    type="search"
                    name="search"
                    value={this.state.key}
                    placeholder="search "
                />
                <Button onClick={this.handleSearch}>Search</Button></div>
        )
    }
}


export const SearchLink = connect(null,mapDispatchToProps)(ConnectedSearchLink)