import React, { Component } from 'react';
import './OverviewStyles.css';
import { Grid, Row, Col, Container } from 'react-bootstrap';
class Overview extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let sampleJSON=this.props.sampleJSON;
        return (
            <div style={{ margin: '0% 10%' }}>
                <div>
                    <div>
                        {
                            Object.keys(sampleJSON.PropertyBackground).map((key, i) => (
                                <div key={i}>
                                    <h4><a href='#'>{key}</a></h4>
                                    <p>{sampleJSON.PropertyBackground[key]}</p>
                                </div>
                            ))
                        }
                    </div>
                    <button type='button'>Read less</button>
                </div>

                <div>
                    <h4><a href="#">Yosemite Westgate Lodge Features & Amenities</a></h4>
                    {
                        Object.keys(sampleJSON.FeaturesAmenities).map((key, i) => (
                            <Row>
                                <Col xs={6} md={4} style={{ border: '1px solid blue' }}>
                                    <h4>{key}</h4>
                                </Col>
                                <Col xs={12} md={8} style={{ border: '1px solid blue' }}>
                                    <Row>
                                        {sampleJSON.FeaturesAmenities[key].map((item) => <Col className="FeaturesItem" lg={4} xs={12} sm={6}>{item}</Col>)}
                                    </Row>
                                </Col>
                            </Row>
                        ))
                    }
                </div>

                <div style={{ margin: '2% 0%' }}>
                    <h4><a href="#">Yosemite Westgate Lodge Policies</a></h4>
                    <p>These are general hotel policies. Policies may vary per room type. Please check the accompanying room details accordingly.</p>
                    <div>
                    <div>
                        {
                            Object.keys(sampleJSON.LodgePolicies).map((key, i) => (
                           
                                <Row style={{ borderBottom: '1px solid grey' }}>
                                    <Col xs={6} md={4}>
                                        <h5>{key}</h5>
                                    </Col>
                                    <Col xs={12} md={8}>
                                        <Row>
                                            <p>
                                                {sampleJSON.LodgePolicies[key]}
                                            </p>
                                        </Row>
                                    </Col>
                                </Row>
                              ))
                        }
                    </div>
                        
                    </div>
                </div>

                <div style={{ margin: '2% 0%' }}>
                    <h4><a href="#">Terms & Conditions</a></h4>
                     <div>   {
                            Object.keys(sampleJSON.TermsConditions).map((key, i) => (
                                <div key={i}>
                                    <p>{sampleJSON.TermsConditions[key]}</p>
                                </div>
                            ))
                        }</div>
                    </div>
                </div>
        );
    }
}
export default Overview;