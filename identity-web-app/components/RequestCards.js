import Link from 'next/link'
import { useState } from 'react'
import Cookies from 'js-cookie'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

import styles from '../styles/Home.module.css'

import connectToExtension from '../utils/extension'
import { domain } from '../config/config'

function RequestCards(props) {
    console.log(props.request)

    var otherUser = (props.type == 'sent') ? props.request.requestedTo : props.request.requestedBy
    const [logMessage, setLog] = useState()

    var variant
    if (props.request.status === 'pending') variant = "warning"
    if (props.request.status === 'signed') variant = "success"
    if (props.request.status === 'declined') variant = "danger"

    var viewDocument = () => {
        let encryptedData, encryptedKey, originalPublicKey
        encryptedData = props.request.document.encryptedFile
        if (props.type == "sent") {
            encryptedKey = props.request.document.encryptedKey        
            originalPublicKey = false
        } else {
            encryptedKey = props.request.sharedKey
            originalPublicKey = props.request.requestedBy.shieldUser.publicKey
        }
        let request = {}
        request.query = 'decrypt'
        request.data = {
            encryptedData: encryptedData,
            encryptedKey: encryptedKey,
            originalPublicKey: originalPublicKey
        }
        connectToExtension(request)
        .then(response => {
            if (response && response.status && response.status === 'SUCCESS') {
                let imageSource = response.decryptedData
                var image = new Image()
                image.src = imageSource
                var w = window.open("")
                w.document.write(image.outerHTML)
            } else {
                setLog('Unable to decrypt file.')
            }
        })
    }

    const handleRequest = (status) => {
        let request = {}
        request.query = 'sign'
        request.data = props.request.document.encryptedFile
        connectToExtension(request)
        .then(response => {
            console.log(response)
            if (response && response.status && response.status === 'SUCCESS') {
                // Prepare the request for API call
                response.status = status
                response.requestId = props.request._id
                fetch(domain + '/application/listen/identity/handleVerification', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + Cookies.get('token')
                    },
                    body: JSON.stringify(response)
                })
                .then(response => response.json())
                .then((data) => {
                    if (data.status === 'SUCCESS') {
                        let toastData = {}
                        toastData.toastShow = true
                        toastData.toastType = 'success'
                        toastData.toastMessage = 'Successfully signed the verification request.'
                        props.handleToast(toastData)
                        setTimeout(() => {
                            location.reload()
                        }, 3000)
                    } else {
                        let toastData = {}
                        toastData.toastShow = true
                        toastData.toastType = 'danger'
                        toastData.toastMessage = 'Unable to sign the verification requet at the moment.'
                        props.handleToast(toastData)
                        setTimeout(() => {
                            location.reload()
                        }, 3000)
                    }
                })
            } else {
                setLog('Unable to sign the document')
            }
        })
    }

    return (
        <>
            <Col xs={12} md={12} lg={6}>
                <Card
                bg="light"
                text="dark"
                className="m-2 p-4 text-center">
                    <Card.Header className="text-capitalize">
                        <Link href={"/user/" + otherUser.username}>
                            {otherUser.profile.fullname}
                        </Link> 
                    </Card.Header>
                    <Card.Body>
                        <Card.Title className={styles.cardTitleX1}>
                        </Card.Title>
                        <Card.Text className="text-capitalize font-weight-bold">
                            {props.request.document.record.recordData.organizationName}
                        </Card.Text>
                        <Card.Text>
                                <Button variant="dark" className={styles.requestActionButton}  onClick={() => viewDocument()}  block>View Document</Button>

                        </Card.Text>
                    </Card.Body>
                    {
                        (props.type == "sent") ? <p><Badge variant={(props.request.status === 'accepted') ? 'success' : (props.request.status === 'pending') ? 'warning' : 'danger'} className="text-capitalize">{props.request.status}</Badge> </p>
                                            : <>
                                                {
                                                    (props.request.status === "pending") ? 
                                                    <Row>
                                                        <Col>
                                                            <Button variant="danger" className={styles.requestActionButton} onClick={() => handleRequest('declined')} block>Reject</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button variant="success" className={styles.requestActionButton} onClick={() => handleRequest('accepted')} block>Accept</Button>
                                                        </Col>
                                                    </Row>
                                                    : <p><Badge variant={(props.request.status === 'accepted') ? 'success' : 'danger'} className="text-capitalize">{props.request.status}</Badge> </p>
                                                }
                                              </>
                    }
                </Card>
                <p className='text-danger'>
                    {logMessage}
                </p>
            </Col>
        </>
    )
}

export default RequestCards