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
 
    const handleUpdate = (name, value) => {
        let currentFieldValues = {...inputFields}
        if (name === "skillDetails") {
            if (currentFieldValues[name].includes(value)) return
            if (currentFieldValues[name].length === 5) return
            currentFieldValues[name].push(value)
            setInputFields(currentFieldValues)
            return
        } 
        currentFieldValues[name] = value
        setInputFields(currentFieldValues)
        return
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
                        <Autosuggest placeholder="Enter your field" value={inputFields.fieldOfInterest} name="fieldOfInterest" handleUpdate={(name, value) => handleUpdate(name, value)} />
                    </Col>
                    <Col className="mt-2 mt-md-0 mt-lg-0">
                        <Form.Control as="select" placeholder="Choose Skill Type" name="skillTag" value={inputFields.skillTag} onChange={(event) => handleUpdate(event.target.name, event.target.value) }>
                            <option disabled>Skill Type</option>
                            <option value="primary">Primary</option>
                            <option value="secondary">Secondary</option>
                            <option value="tertiary">Tertiary</option>
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group controlId="associatedSkill">
                    <Autosuggest placeholder="Name your skillset, Ex: Full stack development" value={inputFields.associatedSkill} name="associatedSkill" handleUpdate={(name, value) => handleUpdate(name, value)} />
                </Form.Group>
                <Form.Group controlId="searchSkillDetail">
                    <Autosuggest placeholder="Add upto 5 related skills"  name="searchSkillDetail" value="" addToList={(data) => handleUpdate("skillDetails", data)} />
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