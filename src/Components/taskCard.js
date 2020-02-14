import React, { Component } from 'react'

class Card extends Component {
    render() {
        return (
            <div className="card mt-4">
                <div className="card-header">
                    {this.props.title}<br></br>
                    <span className="badge badge-pill badge-danger">
                        {this.props.piority}
                    </span>
                </div>
                <div className="card-body">
                    <p>{this.props.description}</p>
                    <p><mark> {this.props.responsible}</mark></p>
                </div>
            </div>
        )
    }

}

export default Card