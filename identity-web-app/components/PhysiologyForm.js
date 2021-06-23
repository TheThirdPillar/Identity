import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function PhysilogyForm () {

    const [inputFields, setInputFields] = useState({
        q1: 0,
        q2: 0,
        q3: 0,
        q4: 0
    })

    useEffect(() => {
        console.log("Change detected: " + JSON.stringify(inputFields));
    }, [inputFields])

    const handleChange = (e) => {
        let currentField = {...inputFields}
        currentField[e.target.name] = e.target.value
        setInputFields(currentField)
        return
    }

    return (
        <Form>
            <Form.Group controlId="physiologyFormQ1">
                <Form.Label column="sm">
                    My ability to assess in what ways physical health matters to me (eg. flexibility | body shape | sports performance etc), set practical goals, test my hypothesis about what works & correlate my progress in accordance with the scientific literature about physiological health.
                </Form.Label>
                <Row className="m-1 p-1">
                    <Col lg={10} md={10} sm={10} className="mt-2">
                        <Form.Control type="range" name="q1" value={inputFields.q1} onChange={(e) => handleChange(e)} min="0" max="10" step="0.5" aria-describedby="physiology-q1" size="sm" />
                    </Col>    
                    <Col>
                        <p id="physiology-q1" className="h4 text-center font-weight-bold">{inputFields.q1}</p>
                    </Col>
                </Row>
            </Form.Group>   
            <Form.Group controlId="physiologyFormQ2">
                <Form.Label column="sm">
                    My ability to generate the appropriate emotional response to being fit with good posture & diet, sticking consistently to respective goals & resolutions, making them a priority on a regular basis & incorporating feedback & knowledge from books / trainers / workouts quickly.
                </Form.Label>
                <Row className="m-1 p-1">
                    <Col lg={10} md={10} sm={10} className="mt-2">
                        <Form.Control type="range" name="q2" value={inputFields.q2} onChange={(e) => handleChange(e)} min="0" max="10" step="0.5" aria-describedby="physiology-q2" size="sm" />
                    </Col>
                    <Col>
                        <p id="physiology-q2" className="h4 text-center font-weight-bold">{inputFields.q2}</p>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group controlId="physiologyFormQ3">
                <Form.Label column="sm">
                    My ability to evaluate difference in energy levels & brain fog, to quickly recuperate towards normal levels in the short term & to make consistent, significant improvements to the baselines in the long term (through diet / exercise / posture / grooming / body language / sleep / breathing).
                </Form.Label>
                <Row className="m-1 p-1">
                    <Col lg={10} md={10} sm={10} className="mt-2">
                        <Form.Control type="range" name="q3" value={inputFields.q3} onChange={(e) => handleChange(e)} min="0" max="10" step="0.5" aria-describedby="physiology-q3" size="sm" />
                    </Col>
                    <Col>
                        <p id="physiology-q3" className="h4 text-center font-weight-bold">{inputFields.q3}</p>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group controlId="physiologyFormQ4">
                <Form.Label column="sm"> 
                    My ability to garner the resources necessary (time / money / courses / equipment) as of today, which are required to make physical health regiments (for exercise/ cooking etc.) a part of my regular lifestyle in agreement with my personal targets & day to day demands.
                </Form.Label>
                <Row className="m-1 p-1">
                    <Col lg={10} md={10} sm={10} className="mt-2">
                        <Form.Control type="range" name="q4" value={inputFields.q4} onChange={(e) => handleChange(e)} min="0" max="10" step="0.5" aria-describedby="physiology-q4" size="sm" />
                    </Col>
                    <Col>
                        <p id="physiology-q4" className="h4 text-center font-weight-bold">{inputFields.q4}</p>
                    </Col>
                </Row>
            </Form.Group>
        </Form>
    )
}

export default PhysilogyForm