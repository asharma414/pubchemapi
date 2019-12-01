import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { search } from '../actions/searchActions';

class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageTerm: ''
         };
         this.onSubmit = this.onSubmit.bind(this);
         this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        this.props.search();
        console.log(this.props.search.imageTerm)
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.searchImage(this.state.imageTerm)
    }

    render() {
        return (
            <div>
                 <img className='image' alt='not available' src={this.props.search.imageHead + this.props.search.imageTerm + this.props.search.imageTail} />
                 <form onSubmit={this.onSubmit}>
                     <input type='text' name='imageTerm' value={this.state.imageTerm} onChange={this.onChange}></input>
                     <button type='submit'>Submit</button>
                 </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    search: state.search
});

Image.propTypes = {
    searchImage: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { search })(Image);
