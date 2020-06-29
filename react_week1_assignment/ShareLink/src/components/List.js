import React from 'react'
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'

export default class List extends React.Component {
    render() {
        return (
            <ListGroupItem>
                <ListGroupItemHeading className='mb-4'>{this.props.title} </ListGroupItemHeading>
                <ListGroupItemText>URLs:{this.props.url}</ListGroupItemText>
                <ListGroupItemText>Tags:{this.props.tags}</ListGroupItemText>


            </ListGroupItem>
        )
    }
}