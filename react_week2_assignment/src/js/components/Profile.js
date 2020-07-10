import React from 'react'

import {connect} from 'react-redux'

import {activateForm} from '../actions/index'

import { Card, CardTitle, CardBody, CardText, Button, CardImg } from 'reactstrap';

const mapStateToProps = (state) =>{
    return {
        profile:state.profile,
        active:state.active
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        activateForm:boolean=>dispatch(activateForm(boolean))
    }
}


 class ConnectedProfile extends React.Component {
    // eslint-disable-next-line
    constructor(props){
        super(props)
    }

    activateForm= (e)=>{
        (this.props.active ===false)?this.props.activateForm(true):this.props.activateForm(false)
    }
    
    render() {
        return (
            <div className='m-3'>
                <Card>
                    <CardImg src={this.props.profile.image} />
                </Card>
                <CardBody>
                    <CardTitle>{this.props.profile.name}</CardTitle>
                    <CardText>Favourite Link(s)
                    Shared Link(s)</CardText>
                    <Button onClick={this.activateForm} color='info'>{this.props.active?'Cancel':'Add Link'}</Button>
                </CardBody>
            </div>
        )
    }
}

export const Profile = connect(mapStateToProps,mapDispatchToProps)(ConnectedProfile)
