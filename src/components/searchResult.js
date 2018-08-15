import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';

class searchResult extends Component{

    constructor(props)
    {
        super(props);

    }

    render() {
        const AlbumResult=this.props.storeResult.map((obj,index)=> {
            return <Row key={index} className="show-grid">
                        <Col xs={6} md={4}>
                                <div>
                                    {obj.artistName}
                                </div>
                        </Col>
                        <Col xs={6} md={4}>
                             <div>
                                 {obj.collectionName}
                             </div>
                        </Col>
                        <Col xsHidden md={4}>
                              <div>
                                  <img src={obj.artworkUrl60} />
                              </div>
                        </Col>
                   </Row>;
        });

        return (
            <div className="searchResult">
               <Grid>
                <Row className="show-grid">
                    <Col xs={6} md={4}>
                        <h3> Artist Name </h3>
                    </Col>
                    <Col xs={6} md={4}>
                        <h3>Album name</h3>
                    </Col>
                    <Col xsHidden md={4}>
                        <h3>Album cover page</h3>
                    </Col>
                </Row>

                   {AlbumResult}

               </Grid>
            </div>
        );
    }
}

export default searchResult;