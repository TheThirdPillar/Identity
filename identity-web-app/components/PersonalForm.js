import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DatePicker from 'react-datepicker'
import Button from 'react-bootstrap/Button'

function PersonalForm(props) {

    const [date, setDate] = useState(new Date())

    return (
        <>
            <Form>
                <Form.Group controlId="personalFormUsername">
                    <Form.Control type="text" placeholder="Pick a username" />
                </Form.Group>
                <Form.Group controlId="personalFormFullname">
                    <Form.Control type="text" placeholder="Enter fullname" />
                </Form.Group>
                <Form.Group controlId="personalFormEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId="personalFormMobile">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="text" placeholder="Enter phone" />
                        </InputGroup>
                    </Form.Group> 
                    <Form.Group as={Col} controlId="personalFormBirthday">
                        <DatePicker 
                            onChange={date => setDate(date)} 
                            className="form-control d-block" 
                            placeholderText="Pick your birthday" 
                            maxDate={date}
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