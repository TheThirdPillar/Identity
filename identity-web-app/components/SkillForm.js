import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { AiFillCloseCircle } from 'react-icons/ai'

import Autosuggest from './Autosuggest'

function SkillForm(props) {

    const [inputFields, setInputFields] = useState({
        fieldOfInterest: '',
        skillTag: '',
        associatedSkill: '',
        skillDetails: [],
        endorsements: [],
        skillLevel: 0,
        ...props.formData
    })
 
    const handleInputChange = (event) => {
        let currentFieldValues = {...inputFields}
        currentFieldValues[event.target.name] = event.target.value
        setInputFields(currentFieldValues)
    }

    const handleUpdate = (name, value) => {
        let currentFieldValues = {...inputFields}
        currentFieldValues[name] = value
        setInputFields(currentFieldValues)
    }

    const removeSkillFromList = (detail) => {
        let skillDetails = inputFields.skillDetails
        let newSkillDetails = skillDetails.filter(x => x !== detail)
        setInputFields({...inputFields, skillDetails: newSkillDetails})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(inputFields)
    }

    return (
        <>
            <Form autoComplete="off" onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="fieldOfInterest">
                    <Col md={8}>
                        <Autosuggest placeholder="Enter your field" value={inputFields.fieldOfInterest} name="fieldOfInterest" handleUpdate={(name, value) => handleUpdate(name, value)}/>
                    </Col>
                    <Col className="mt-2 mt-md-0 mt-lg-0">
                        <Form.Control as="select" placeholder="Choose Skill Type" name="skillTag" value={inputFields.skillTag} onChange={(event) => handleInputChange(event)}>
                            <option disabled>Skill Type</option>
                            <option value="primary">Primary</option>
                            <option value="secondary">Secondary</option>
                            <option value="tertiary">Tertiary</option>
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group controlId="associatedSkill">
                    <Form.Control type="text" placeholder="Name your skillset, Ex: Full stack development" name="associatedSkill" value={inputFields.associatedSkill} onChange={(event) => handleInputChange(event)} />
                </Form.Group>
                <Form.Group controlId="searchSkillDetail">
                    <Form.Control type="text" placeholder="Enter Skill" name="searchSkillDetail" onChange={(event) => handleInputChange(event)} />
                    <Form.Text>
                        {inputFields.skillDetails.map((detail, index) => (
                            <a onClick={() => removeSkillFromList(detail)} key={index} >
                                <Badge pill variant="dark" className="m-1 btn skillBadge">{detail} <AiFillCloseCircle /></Badge>
                            </a>
                        ))}
                    </Form.Text>
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

export default SkillForm