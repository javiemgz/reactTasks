import React, { Component } from 'react';
import logo from '../logo.svg'
import '../App.css'

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a href="http://localhost:3000/" className="text-white">
                <img src={logo} className="App-logo" alt="logo" />
                    {this.props.title}
                    <span className="badge badge-pill badge-light ml-2">{this.props.pendings}</span>
                </a>
            </nav>
        )
    }
}

export default Navigation;