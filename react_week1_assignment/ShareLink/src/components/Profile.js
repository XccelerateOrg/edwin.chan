import React from 'react'
import AddLink from './AddLink';

import { Card, CardHeader, CardTitle, CardBody, CardText, Button, CardImg } from 'reactstrap';


export default class Profile extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className='m-3'>
                <Card>
                    <CardImg src={this.props.image} />
                </Card>
                <CardBody>
                    <CardTitle>{this.props.name}</CardTitle>
                    <CardText>Favourite Link(s)
                    Shared Link(s)</CardText>
                    <Button onClick={this.props.clickToggle} color='info'>{this.props.active?'Cancel':'Add Link'}</Button>
                </CardBody>
            </div>
        )
    }
}