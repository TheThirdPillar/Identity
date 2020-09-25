import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function OtpForm(props) {
    return (
        <>
            <Row>
                <Col className="text-center">
                <h6>Please enter the OTP sent to:</h6>
                <h4>{props.contact}</h4>
                </Col>
            </Row>
            <Form>
                <Form.Group controlId="personalFormUsername">
                    <Form.Control type="text" placeholder="Enter OTP" />
                </Form.Group>
                <Form.Group as={Row}>
                    <Col className="text-right">
                        <Button type="submit">Submit</Button>
                    </Col>
                </Form.Group>
            </Form>
        </>
    )
}

export default OtpForm