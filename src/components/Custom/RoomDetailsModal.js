import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import react, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import sampleJSON from '../../data/westgate';
import { Grid, Row, Col, Container } from 'react-bootstrap';
import CalendarNew from '../Common/CalendarNew';
import Alert from 'react-bootstrap/Alert';
function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.Room.Title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Tabs defaultActiveKey="RoomDetails" id="uncontrolled-tab-example">
                    <Tab eventKey="RoomDetails" title="ROOM DETAILS">

                    <h3>Description</h3>

                        <p>{props.Room.Description}</p>
                        <p>If you have any questions or would like to report any issues related to the accessibility features of our hotel’s website, please contact us at
yosemitewestgatelodge@innsight.com</p>
                        <p>People Allowed :{props.Room.PeopleAllowed}</p>
                    </Tab>
                    <Tab eventKey="AMENITIES" title="AMENITIES">
                        <p>{props.Room.Rate}</p>
                    </Tab>
                    <Tab eventKey="CALENDAR" title="RATE CALENDAR" >
                        <p> <CalendarNew/></p>
                    </Tab>
                    <Tab eventKey="TERMS" title="TERMS" >
                        <div>


                            <Row>
                                <Col xs={6} md={4}>
                                    Check in Time
                                    </Col>
                                <Col xs={12} md={8}>
                                    {sampleJSON.LodgePolicies['Check in Time']}
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={6} md={4}>
                                    Check out Time
                                </Col>
                                <Col xs={12} md={8}>
                                    {sampleJSON.LodgePolicies['Check out Time']}
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={6} md={4}>
                                    Cancellation Policy
                                </Col>
                                <Col xs={12} md={8}>
                                    {sampleJSON.LodgePolicies['Cancellation Policy']}
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={6} md={4}>
                                    Accepted Payment Methods
                                </Col>
                                <Col xs={12} md={8}>
                                    {sampleJSON.LodgePolicies['Accepted Payment Methods']}
                                </Col>
                            </Row>

                            <h6>Terms & Conditions</h6>
                            <div>   {
                                Object.keys(sampleJSON.TermsConditions).map((key, i) => (
                                    <div key={i}>
                                        <p>{sampleJSON.TermsConditions[key]}</p>
                                    </div>
                                ))
                            }</div>
                        </div>
                    </Tab>
                    <Tab eventKey="ACCESSIBILITY" title="ACCESSIBILITY">
                        <p>{props.Room.Title}</p>
                    </Tab>
                </Tabs>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function RoomDetailsModal(props) {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Show Room Details
        </Button>

            <MyVerticallyCenteredModal
                Room={props.Room}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default RoomDetailsModal;

