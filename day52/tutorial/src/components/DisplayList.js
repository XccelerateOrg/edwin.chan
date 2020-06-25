import React from 'react'
import CommentCard from './CommentCard'

class DisplayList extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        let listitems = this.props.list.map(item =>(
            <CommentCard
                key={item.id}

                author={item.author}

                comment={item.comment}

                image={item.image}

                date={item.date} />)
        )
        return (
            <div>
                <h1> {this.props.name}'s List</h1>

                <ul className="list-group">

                    {listitems}
                </ul>
            </div>

        )
    }
}

export default DisplayList