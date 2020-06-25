import React, { Component } from "react";

import faker from "faker";

import DisplayList from './DisplayList'
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line


class CommentCardList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Yoda',
            list: [
                {
                    id: 1,
                    author: "Altaf",
                    comment: "Altaf's first comment, amazing",
                    image: faker.image.avatar(),
                    date: "11/07/2019"
                },
                {
                    id: 1,
                    author: "Altaf",
                    comment: "Altaf's first comment, amazing",
                    image: faker.image.avatar(),
                    date: "11/07/2019"
                },
                {
                    id: 1,
                    author: "Altaf",
                    comment: "Altaf's first comment, amazing",
                    image: faker.image.avatar(),
                    date: "11/07/2019"
                },
                {
                    id: 1,
                    author: "Altaf",
                    comment: "Altaf's first comment, amazing",
                    image: faker.image.avatar(),
                    date: "11/07/2019"
                }
            ]
        }
    }
    render() {

        return (
            <DisplayList name={this.state.name}list={this.state.list}/>
        );

    }

}

export default CommentCardList;