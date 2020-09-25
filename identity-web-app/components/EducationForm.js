import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DatePicker from 'react-datepicker'
import Button from 'react-bootstrap/Button'

function PersonalForm(props) {

    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()

    return (
        <>
            <Form>
                <Form.Group controlId="educationFormInstitute">
                    <Form.Control type="text" placeholder="Enter your college name" />
                </Form.Group>
                <Form.Group controlId="educationFormDegree">
                    <Form.Control type="text" placeholder="Enter degree, ex: Bachelor's" />
                </Form.Group>
                <Form.Group controlId="educationFormFieldOfStudy">
                    <Form.Control type="text" placeholder="Field of study" />
                </Form.Group>
                <Form.Row>
                <Form.Group as={Col} controlId="educationFormStartDate">
                        <DatePicker 
                            onChange={date => setStartDate(date)} 
                            className="form-control d-block" 
                            placeholderText="Start date" 
                            dateFormat="d MMMM, yyyy"
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="educationFormEndDate">
                        <DatePicker 
                            onChange={date => setEndDate(date)} 
                            className="form-control d-block" 
                            placeholderText="End date" 
                            dateFormat="d MMMM, yyyy"
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Group as={Row}>
                    <Col className="text-right">
                        <Button type="submit">Submit</Button>
                    </Col>
                </Form.Group>
            </Form>
        </>
    )
}

export default PersonalForm