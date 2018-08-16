import React, { Component } from 'react';
import { throttle } from 'throttle-debounce';

class searchBar extends Component {

    constructor(props){
        super(props);
        this.state= {
            artistName : ''
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.searchThrottled = throttle(1000, this.props.onSearch);
    }

    onInputChange(event) {
        const artistName = event.target.value;
        if(artistName!==null)
        {
            this.setState({
                        artistName : artistName
                    },()=>{this.searchThrottled(this.state.artistName)});
        }
    }


    render() {

        return (
            <div className="searchBar">
               <input type="text" value={this.state.artistName} onChange={this.onInputChange}/>
            </div>
        );
    }
}

export default searchBar;
