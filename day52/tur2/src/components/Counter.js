import React from 'react'

export default class Counter extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <h5>{(this.props.name === '') ? 'Counter' : this.props.name + `'s Counter`}: {this.props.count}</h5>

                    <button onClick={this.props.onPlusButtonClicked}>+</button>

                    <button onClick={this.props.onMinusButtonClicked}>-</button>

                    <button onClick={this.props.onRemoveButtonClicked}>Remove</button>
                </div>


            </div>
        )
    }
}