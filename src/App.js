import React, { Component } from 'react';
import SearchBar from '../src/components/searchBar';
import SearchResult from '../src/components/searchResult';
import {Grid, Row, Col, Image} from 'react-bootstrap';


class App extends Component {

    constructor(props)
    {
        super(props);
        this.state ={
            artistName : '',
            storeResult : Array(0)
        };
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(artistName)
    {
        let store;
        let storeResult;
        this.setState({
            artistName: artistName
        },()=> {
            let ARTIST_NAME = this.state.artistName;
            if (ARTIST_NAME !== '')
            {
                fetch(`https://itunes.apple.com/search?term=${ARTIST_NAME}`).then((res) => {
                    return res.json();
                }).then((data) => {
                    store = Array(0);
                    if(data.results.length === 0){
                        storeResult =this.state.storeResult.slice();
                        storeResult = store;
                        this.setState({
                            storeResult : storeResult
                        });
                    }
                    data.results.forEach((single) => {
                        if (single.artistName.toUpperCase().includes(ARTIST_NAME.toUpperCase())) {
                            store.push(single);
                        }

                        storeResult =this.state.storeResult.slice();
                        storeResult = store;
                        this.setState({
                            storeResult : storeResult
                        });
                    });
                }).catch((error)=>{
                    console.log("Fetch error",error);
                });
            }
        });
    }

    render() {

        return (
          <div className="App">

              <Grid>
                  <Row className="show-grid">
                      <Col xs={6} md={4}>
                          <Image src="https://cdn3.iconfinder.com/data/icons/brands-applications/512/itunes_A-128.png" rounded />
                      </Col>
                  </Row>
                  <Row>
                      <Col xs={6} md={4}>
                         <div>
                             <SearchBar onSearch={this.onSearch}/>
                         </div>
                      </Col>
                  </Row>
                  <Row className="show-grid">
                      <Col xs={12} md={8}>
                          <code> <SearchResult storeResult ={this.state.storeResult} artistName={this.state.artistName}/> </code>
                      </Col>
                  </Row>

              </Grid>
          </div>

    );
  }
}

export default App;
