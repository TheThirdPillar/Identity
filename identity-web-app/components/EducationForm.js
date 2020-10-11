import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DatePicker from 'react-datepicker'
import Button from 'react-bootstrap/Button'

function EducationForm(props) {


    const [inputFields, setInputFields] = useState({
        organizationName: "",
        certificationName: "",
        specialization: "",
        startDate: null,
        endDate: null,
        documents: [],
        active: false,
        ...props.formData
    })

    const setDate = (date, name) => {
        console.log(typeof date)
        let currentField = {...inputFields}
        currentField[name] = date
        setInputFields(currentField)
    } 

    const handleChange = (e) => {
        let currentField = {...inputFields}
        if (e.target && e.target.name && e.target.name === "active") {
            currentField[e.target.name] = !(currentField.active)
            setInputFields(currentField)
            return              
        }
        currentField[e.target.name] = e.target.value
        setInputFields(currentField)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputFields)
    }

    return (
        <>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Form.Group controlId="educationFormInstitute">
                    <Form.Control type="text" placeholder="Enter your college name" name="organizationName" value={inputFields.organizationName} onChange={(e) => handleChange(e)} required />
                </Form.Group>
                <Form.Group controlId="educationFormDegree">
                    <Form.Control type="text" placeholder="Enter degree, ex: Bachelor's" name="certificationName" value={inputFields.certificationName} onChange={(e) => handleChange(e)} required />
                </Form.Group>
                <Form.Group controlId="educationFormFieldOfStudy">
                    <Form.Control type="text" placeholder="Field of study" name="specialization" value={inputFields.specialization} onChange={(e) => handleChange(e)} />
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId="educationFormStartDate">
                        <DatePicker 
                            onChange={(date) => setDate(date, "startDate")} 
                            selected={inputFields.startDate}
                            className="form-control d-block" 
                            placeholderText="Start date Ex. August 2009" 
                            dateFormat="MM/yyyy"
                            name="startDate"
                            maxDate={new Date()}
                            showMonthYearPicker
                            showFullMonthYearPicker
                            required
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="educationFormEndDate">
                        <DatePicker 
                            onChange={(date) => setDate(date, "endDate")} 
                            selected={inputFields.endDate}
                            className="form-control d-block" 
                            placeholderText="End date Ex. June 2013" 
                            dateFormat="MM/yyyy"
                            name="endDate"
                            showMonthYearPicker
                            showFullMonthYearPicker
                            disabled={inputFields.active}
                        />
                        <Form.Check type="switch" label="Currently Active" checked={(inputFields.active) ? "checked" : ""} onChange={(e) => handleChange(e)} name="active" />
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

export default EducationForm