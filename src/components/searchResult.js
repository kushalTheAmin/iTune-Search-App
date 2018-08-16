import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

const searchResult = (props) => {
        let AlbumResult=<div> </div>;
        if(props.artistName !== '' && props.storeResult.length!==0) {
             AlbumResult = props.storeResult.map((obj, index) => {
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
                            <img src={obj.artworkUrl60} alt="unavailable"/>
                        </div>
                    </Col>
                </Row>;
            });
        }
        else if(props.artistName === '' || props.storeResult.length===0){
            AlbumResult =<div> </div>;
        }

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

};

export default searchResult;