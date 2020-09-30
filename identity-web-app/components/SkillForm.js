import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

import { AiFillCloseCircle } from 'react-icons/ai'

function SkillForm(props) {

    const [skillTags, setSkillTags] = useState([])

    return (
        <>
            <Form>
                <Form.Group as={Row} controlId="skillFormField">
                    <Col md={8}>
                        <Form.Control type="text" placeholder="Enter your field of interest" />
                    </Col>
                    <Col className="mt-2 mt-md-0 mt-lg-0">
                        <Form.Control as="select" placeholder="Choose Skill Type">
                            <option>Primary</option>
                            <option>Secondary</option>
                            <option>Tertiary</option>
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group controlId="skillFormSkillSet">
                    <Form.Control type="text" placeholder="Name your skillset, Ex: Full stack development" />
                </Form.Group>
                <Form.Group controlId="skillFormSkills">
                    <Form.Control type="text" placeholder="Enter Skill" />
                    <Form.Text id="passwordHelpBlock" muted>
                        {skillTags.map((tag) => (
                            <Badge pill variant="dark" className="m-1 skillBadge">{tag} <AiFillCloseCircle /></Badge>
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