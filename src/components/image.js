import React, { Component } from 'react';
import { connect } from 'react-redux';

class Image extends Component {

    render() {
        return (
            <div>
                 <img className='image' alt='not available' src={this.props.search.imageHead + this.props.search.term + this.props.search.imageTail} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    search: state.search
});

export default connect(mapStateToProps)(Image);
