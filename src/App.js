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
        let store =Array(0);
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
                    data.results.map((single) => {
                        if (single.artistName.toUpperCase().includes(ARTIST_NAME.toUpperCase())) {
                            store.push(single);
                            //console.log(store);

                        }
                        storeResult =this.state.storeResult.slice();
                        storeResult = store;
                        this.setState({
                            storeResult : storeResult
                        });
                        console.log(this.state.storeResult);
                    });

                }).catch((error)=>{
                    console.log("Fetch error",error);
                });
            }
            else{

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
                          <code> <SearchResult storeResult ={this.state.storeResult}/> </code>
                      </Col>
                  </Row>

              </Grid>
          </div>

    );
  }
}

export default App;
