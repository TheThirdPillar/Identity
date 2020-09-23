import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import styles from '../styles/Home.module.css'

function RequestCards(props) {
    return (
        <>
            <Col xs={12} md={12} lg={6}>
                <Card
                bg="light"
                text="dark"
                className="m-2 p-4 text-center">
                    <Card.Header>
                        Moses Sam Paul
                    </Card.Header>
                    <Card.Body>
                        <Card.Title className={styles.cardTitleX1}>
                            Marksheet - 1
                        </Card.Title>
                        <Card.Text>
                            PES Institute of Technology
                        </Card.Text>
                    </Card.Body>
                    {
                        (props.type == "sent") ? <Button variant="warning" className={styles.requestActionButton}>Pending</Button> 
                                            : <>
                                                <Button variant="primary" className={styles.requestActionButton}>Accept</Button>
                                                <Button variant="secondary" className={styles.requestActionButton}>Reject</Button>
                                              </>
                    }
                    <Button variant="dark" className={styles.requestActionButton}>View Document</Button>
                </Card>
            </Col>
        </>
    )
}

export default RequestCards