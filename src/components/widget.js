import React, { Component } from 'react'

export default class Widget extends Component {
    state = {
        term: '',
    }
    render() {
        return (
            <div>
                <iframe class="pubchem-widget" src={this.state.first + this.state.term + this.state.tail}></iframe>
            </div>
        )
    }
}
