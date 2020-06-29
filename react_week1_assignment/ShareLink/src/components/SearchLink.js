import React from 'react'
import { Input } from 'reactstrap'

export default class SearchLink extends React.Component {
    render() {
        return (
            <div className='ml-auto m-3'>
                <Input
                    type="search"
                    name="search"
                    placeholder="search tags/title"
                /></div>
        )
    }
}
