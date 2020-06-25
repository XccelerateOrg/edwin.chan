import React from 'react';
import {Card, CardHeader,CardTitle,CardBody,CardText} from 'reactstrap';


class CommentCard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let style = {

            maxWidth: "18rem"

        };

        let center = {

            display: "flex",

            justifyContent: "center",

            alignItems: "center",

            flexWrap: "wrap"

        };
        return(<div>

<Card className='card text-primary'style={style}>

<CardHeader>

    <div style={center}>

        <img src={this.props.image} alt="this pict ure" />

    </div>

</CardHeader>

<CardTitle style={center}>

    <h3>{this.props.author}</h3>

</CardTitle>

<CardBody style={center}>

    <CardText> <p>Today at: {this.props.date} </p> </CardText>

    <CardText>{this.props.comment} </CardText>

</CardBody>

</Card>        </div>)
    }
}

export default CommentCard