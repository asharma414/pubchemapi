import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../actions/searchActions';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
         };
         this.onSubmit = this.onSubmit.bind(this);
         this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        this.props.search();
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.search(this.state.term)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                     <input type='text' name='term' value={this.state.term} onChange={this.onChange}></input>
                     <button type='submit'>Submit</button>
                 </form> 
            </div>
        )
    }
}

export default connect(null, { search })(Search)
