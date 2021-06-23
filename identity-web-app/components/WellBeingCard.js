import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'

import styles from '../styles/Dashboard.module.css'

export default function WellBeingCard (props) {


    // TODO: Find better way to do this.
    // TODO: Pre-calculate and change calculateScore implementation.


    let physiologyStack = props.stacks.find(stack => {
        return stack.stackName === 'physiology'
    })
    let energyStack = props.stacks.find(stack => {
        return stack.stackName === 'energy'
    })
    let feelingStack = props.stacks.find(stack => {
        return stack.stackName === 'feeling'
    })
    let thinkingStack = props.stacks.find(stack => {
        return stack.stackName === 'thinking'
    })
    let behaviorStack = props.stacks.find(stack => {
        return stack.stackName === 'behavior'
    })
    let resultStack = props.stacks.find(stack => {
        return stack.stackName === 'result'
    })

    const calculateScore = (ratings) => {
        let score = 0
        for (var q of Object.keys(ratings)) {
            console.log(Number(ratings[q]))
            score = score +  Number(ratings[q])
        }
        return ((score * 10) / 4)
    }

    return (
        <Row className="justify-content-center">
            <Col xs={12} md={12} lg={12}>
                <CardDeck className="m-2">
                    <Card className="text-center bg-dark text-white">
                        <Card.Body>
                            <Card.Title>Overall Score</Card.Title>
                            <Card.Text className={styles.wellBeingScore + " font-weight-bold mt-4"}>
                                {Math.ceil(props.score)}<span className={styles.wellBeingScoreTotal}>/100</span>
                            </Card.Text>
                            {
                                (props.isPublic) 
                                    ? ""
                                    : <Button size="sm" variant="warning">Request Validation</Button> 
                            } 
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            Last validated: {(props.validation) ? new Date(props.validation.validationDate) + " days ago" : "Not validated yet"}  
                        </Card.Footer>
                    </Card>
                    <Card className="bg-dark text-white p-1">
                        <Card.Body>
                            <Row>
                                <Col xs={6} md={6} lg={6}>
                                    <Card.Text className="mt-1">
                                        Physiology
                                        <ProgressBar now={calculateScore(physiologyStack.stackRatings)} label={calculateScore(physiologyStack.stackRatings) + "%"} variant="warning" className="mt-1" />
                                    </Card.Text>
                                    <Card.Text className="mt-1">
                                        Energy
                                        <ProgressBar now={calculateScore(energyStack.stackRatings)} label={calculateScore(energyStack.stackRatings) + "%"} variant="warning" className="mt-1" />    
                                    </Card.Text>
                                    <Card.Text className="mt-1">
                                        Feeling
                                        <ProgressBar now={calculateScore(feelingStack.stackRatings)} label={calculateScore(feelingStack.stackRatings) + "%"} variant="warning" className="mt-1" />    
                                    </Card.Text>
                                </Col>
                                <Col xs={6} md={6} lg={6}>
                                    <Card.Text className="mt-1">
                                        Thinking
                                        <ProgressBar now={calculateScore(thinkingStack.stackRatings)} label={calculateScore(thinkingStack.stackRatings) + "%"} variant="warning" className="mt-1" />    
                                    </Card.Text>
                                    <Card.Text className="mt-1">
                                        Behavior
                                        <ProgressBar now={calculateScore(behaviorStack.stackRatings)} label={calculateScore(behaviorStack.stackRatings) + "%"} variant="warning" className="mt-1" />
                                    </Card.Text>
                                    <Card.Text className="mt-1">
                                        Results
                                        <ProgressBar now={calculateScore(resultStack.stackRatings)} label={calculateScore(resultStack.stackRatings) + "%"} variant="warning" className="mt-1" />    
                                    </Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer className="text-muted text-center">Productivity Stack</Card.Footer>
                    </Card>
                </CardDeck>
            </Col>
        </Row>
    )

}