import React from 'react'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'
import {fetchLinks} from '../actions/index'

const mapStateToProps = (state) => {
    return {
        linkList: state.linkList,
        searchList: state.searchList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        listLink: () => dispatch(fetchLinks())
    }
}


export class ConnectedList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.listLink()
    }

    render() {

        return (
            <ListGroup>
                {
                    this.props.searchList.length ?
                        this.props.searchList.map((el) => (
                            <ListGroupItem key={el.id} >
                                <ListGroupItemHeading className='mb-4'>{el.name} </ListGroupItemHeading>
                                <ListGroupItemText>URLs:{el.url}</ListGroupItemText>
                                <ListGroupItemText>Tags:{el.tags}</ListGroupItemText>
                            </ListGroupItem>
                        )) :
                        this.props.linkList.map((el) => (
                            <ListGroupItem key={el.id} >
                                <ListGroupItemHeading className='mb-4'>{el.name} </ListGroupItemHeading>
                                <ListGroupItemText>URLs:{el.url}</ListGroupItemText>
                                <ListGroupItemText>Tags:{el.tags}</ListGroupItemText>
                            </ListGroupItem>
                        ))
                }
            </ListGroup>
        )
    }
}

export const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList)