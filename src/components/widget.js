import React, { Component } from 'react';
import { connect } from 'react-redux';

class Widget extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <iframe title='widget' className="pubchem-widget" src={this.props.search.widgetHead + this.props.search.term + this.props.search.widgetTail}></iframe>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    search: state.search
});

export default connect(mapStateToProps)(Widget);
