import React from 'react'
import { Input,Button} from 'reactstrap'

export default class SearchLink extends React.Component {
    constructor(props){
        super(props)
        this.state={
            key:''
        }
    }
    handleChange = (e) =>{
        let keyWord = e.target.value
        this.setState({
            key:keyWord
        })
    }
    handleSearch = () =>{
        let {key} =this.state
        this.props.clickSearch(key)
    }
    render() {
        return (
            <div className='ml-auto m-3 '>
                <Input
                    onChange={this.handleChange}
                    className='w-50 d-inline'
                    type="search"
                    name="search"
                    placeholder="search "
                />
                <Button onClick={this.handleSearch}>Search</Button></div>
        )
    }
}
