import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'

import styles from '../styles/Dashboard.module.css'

export default function WellBeingCard (props) {

    return (
        <CardDeck className={styles.section}>
            <Card className="text-center bg-dark text-white">
                <Card.Body>
                    <Card.Title>Overall Score</Card.Title>
                    <Card.Text className={styles.wellBeingScore + " font-weight-bold mt-4"}>
                        {props.score}<span className={styles.wellBeingScoreTotal}>/100</span>
                    </Card.Text>
                    {/* <Button variant="dark" disabled>View Details</Button> */}
                </Card.Body>
                <Card.Footer className="text-muted">Last updated: 2 days ago</Card.Footer>
            </Card>
            <Card className="bg-dark text-white p-1">
                <Card.Body>
                    <Row>
                        <Col xs={6} md={6} lg={6}>
                            <Card.Text className="mt-1">
                                Physiology
                                <ProgressBar now="10" label={`10%`} variant="warning" className="mt-1" />
                            </Card.Text>
                            <Card.Text className="mt-1">
                                Energy
                                <ProgressBar now="10" label={`10%`} variant="warning" className="mt-1" />    
                            </Card.Text>
                            <Card.Text className="mt-1">
                                Feeling
                                <ProgressBar now="10" label={`10%`} variant="warning" className="mt-1" />    
                            </Card.Text>
                        </Col>
                        <Col xs={6} md={6} lg={6}>
                            <Card.Text className="mt-1">
                                Thinking
                                <ProgressBar now="10" label={`10%`} variant="warning" className="mt-1" />    
                            </Card.Text>
                            <Card.Text className="mt-1">
                                Behavior
                                <ProgressBar now="10" label={`10%`} variant="warning" className="mt-1" />
                            </Card.Text>
                            <Card.Text className="mt-1">
                                Results
                                <ProgressBar now="10" label={`10%`} variant="warning" className="mt-1" />    
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer className="text-muted text-center">Productivity Stack</Card.Footer>
            </Card>
        </CardDeck>
    )

}