import React, { Component } from 'react';

class searchBar extends Component {

    constructor(props){
        super(props);
        this.state= {
            artistName : ''
        };
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(event) {
        let artistName = event.target.value;
        this.setState({
            artistName : artistName
        },()=> {this.props.onSearch(this.state.artistName)});
    }

    render() {

        return (
            <div className="searchBar">
                <input type="text" value={this.state.artistName} onChange={this.onSearch}/>
            </div>
        );
    }
}

export default searchBar;
