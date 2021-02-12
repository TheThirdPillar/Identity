import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

import RequestCards from './RequestCards'

import { domain } from '../config/config'

function RequestContainer(props) {

    var verificationSent = []
    var verificationReceived = []
    var accessSent = []
    var accessReceived = []

    const [requests, setRequests] = useState(null)
    useEffect(() => {
        if (!requests) {
            fetch(domain + '/application/listen/identity/getRequests', {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + Cookies.get('token')
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.status == 'SUCCESS') {
                    setRequests(data.requests)
                    setUser(data.user)
                }
                return <div>Unable to fetch requests ....</div>
            })
        } else {
            for (let i = 0; i < requests.length; i++) {
                if (requests[i].type === 'verification') {
                    if (requests[i].requestedBy._id === user) verificationSent.push(requests[i])
                    if (requests[i].requestedTo._id === user) verificationReceived.push(requests[i])
                } else if (requests[i].type === 'access') {
                    if (requests[i].requestedBy._id === user) accessSent.push(requests[i])
                    if (requests[i].requestedTo._id === user) accessReceived.push(requests[i])
                }
            }
        }
    }, [requests])

    const [user, setUser] = useState()

    if (!requests) return <div>Loading....</div>

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
                                {
                                    requests.map((request, index) => {
                                        if (request.type === 'verification' && request.requestedBy._id === user)
                                        return (
                                            <RequestCards type="sent" key={index} request={request} handleToast={(toastData) => props.handleToast(toastData)}/>
                                        )
                                    })
                                }
                            </Tab.Pane>
                            <Tab.Pane eventKey="vreceived">
                                {
                                    requests.map((request, index) => {
                                        if (request.type === 'verification' && request.requestedTo._id === user)
                                        return (
                                            <RequestCards type="received" key={index} request={request} handleToast={(toastData) => props.handleToast(toastData)} />
                                        )
                                    })
                                }
                            </Tab.Pane>
                            <Tab.Pane eventKey="asent">
                                {
                                    requests.map((request, index) => {
                                        if (request.type === 'access' && request.requestedBy._id === user)
                                        return (
                                            <RequestCards type="sent" key={index} request={request} handleToast={(toastData) => props.handleToast(toastData)} />
                                        )
                                    })
                                }
                            </Tab.Pane>
                            <Tab.Pane eventKey="areceived">
                                {
                                    requests.map((request, index) => {
                                        if (request.type === 'access' && request.requestedTo._id === user)
                                        return (
                                            <RequestCards type="received" key={index} request={request} handleToast={(toastData) => props.handleToast(toastData)} />
                                        )
                                    })
                                }
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    )
}

export default RequestContainer