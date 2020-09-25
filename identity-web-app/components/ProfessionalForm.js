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
                <Form.Group controlId="professionalFormInstitute">
                    <Form.Control type="text" placeholder="Enter company name" />
                </Form.Group>
                <Form.Group controlId="professionalFormEmploymentType">
                    <Form.Control as="select" placeholder="Choose Employment Type">
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Self Employed</option>
                        <option>Freelance</option>
                        <option>Internship</option>
                        <option>Apprenticeship</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="professionalFormPosition">
                    <Form.Control type="text" placeholder="Position Ex: Sales Manager" />
                </Form.Group>
                <Form.Row>
                <Form.Group as={Col} controlId="professionalFormStartDate">
                        <DatePicker 
                            onChange={date => setStartDate(date)} 
                            className="form-control d-block" 
                            placeholderText="Start date" 
                            dateFormat="d MMMM, yyyy"
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="professionalFormEndDate">
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