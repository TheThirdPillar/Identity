import Link from 'next/link'
import { useState } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

import styles from '../styles/Home.module.css'

import connectToExtension from '../utils/extension'

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
            if (response && response.status === 'SUCCESS') {
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
                        (props.type == "sent") ? <p><Badge variant={variant} className="text-capitalize">{props.request.status}</Badge> </p>
                                            : <>
                                                {
                                                    (props.request.status === "pending") ? 
                                                    <Row>
                                                        <Col>
                                                            <Button variant="danger" className={styles.requestActionButton} block>Reject</Button>
                                                        </Col>
                                                        <Col>
                                                            <Button variant="success" className={styles.requestActionButton} block>Accept</Button>
                                                        </Col>
                                                    </Row>
                                                    : <p><Badge variant={variant} className="text-capitalize">{props.request.status}</Badge> </p>
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