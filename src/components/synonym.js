import React, { Component } from 'react'
import { connect } from 'react-redux';


class Synonym extends Component {
    
    state = {
        synonyms: []
    }

    componentDidMount() {
        fetch(this.props.search.imageHead + this.props.search.term + '/synonyms/json')
        .then(res => res.json())
        .then(data => this.setState({synonyms: data.InformationList.Information[0].Synonym}))
    }

    render() {
        return (
            <ul>
                {this.state.synonyms.map(str => <li>{str}</li>)}
            </ul>
        )
    }
}
const mapStateToProps = state => ({
    search: state.search
});

export default connect(mapStateToProps)(Synonym);