import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

import RequestCards from './RequestCards'

function RequestContainer() {
    return (
        <>
            <Tab.Container id="" defaultActiveKey="vsent">
                <Row className="mt-4">
                    <Col sm={12} lg={3} className="text-center">
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="vsent">Verification Sent</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="vreceived">Verification Received</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="asent">Access Sent</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="areceived">Access Received</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={12} lg={9} className="mt-4 mt-lg-0">
                        <Tab.Content>
                            <Tab.Pane eventKey="vsent">
                                <RequestCards type="sent" />
                                <RequestCards type="sent" />
                                <RequestCards type="sent" />
                                <RequestCards type="sent" />
                                <RequestCards type="sent" />
                                <RequestCards type="sent" />
                            </Tab.Pane>
                            <Tab.Pane eventKey="vreceived">
                                <RequestCards type="received" />
                                <RequestCards type="received"  />
                                <RequestCards type="received"  />
                                <RequestCards type="received"  />
                                <RequestCards type="received"  />
                                <RequestCards type="received"  />
                            </Tab.Pane>
                            <Tab.Pane eventKey="asent">
                                <RequestCards type="sent" />
                                <RequestCards type="sent" />
                                <RequestCards type="sent" />
                                <RequestCards type="sent" />
                                <RequestCards type="sent" />
                                <RequestCards type="sent" />
                            </Tab.Pane>
                            <Tab.Pane eventKey="areceived">
                                <RequestCards type="received"  />
                                <RequestCards type="received"  />
                                <RequestCards type="received"  />
                                <RequestCards type="received"  />
                                <RequestCards type="received"  />
                                <RequestCards type="received"  />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    )
}

export default RequestContainer