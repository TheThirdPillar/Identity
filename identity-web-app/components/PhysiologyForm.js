import { useState } from 'react'
import Cookies from 'js-cookie'

import Form from 'react-bootstrap/Form'

function PhysilogyForm () {

    const [inputFields, setInputFields] = useState({
        q1: 0,
        q2: 0,
        q3: 0,
        q4: 0
    })

    const handleChange = (e) => {
        let currentField = {...inputFields}
        currentField[e.target.name] = e.target.value
        setInputFields(currentField)
        return
    }

    return (
        <Form>
            <Form.Group controlId="physiologyFormQ1">
                <Form.Label>
                    My ability to assess in what ways physical health matters to me (eg. flexibility | body shape | sports performance etc), set practical goals, test my hypothesis about what works & correlate my progress in accordance with the scientific literature about physiological health.
                </Form.Label>
                <Form.Control type="range" name="q1" value={inputFields.q1} onChange={(e) => handleChange(e)} min="0" max="10" step="0.5" />
            </Form.Group>
            <Form.Group controlId="physiologyFormQ2">
                <Form.Label>
                    My ability to generate the appropriate emotional response to being fit with good posture & diet, sticking consistently to respective goals & resolutions, making them a priority on a regular basis & incorporating feedback & knowledge from books / trainers / workouts quickly.
                </Form.Label>
                <Form.Control type="range" name="q2" value={inputFields.q2} onChange={(e) => handleChange(e)} min="0" max="10" step="0.5" />
            </Form.Group>
            <Form.Group controlId="physiologyFormQ3">
                <Form.Label>
                    My ability to evaluate difference in energy levels & brain fog, to quickly recuperate towards normal levels in the short term & to make consistent, significant improvements to the baselines in the long term (through diet / exercise / posture / grooming / body language / sleep / breathing).
                </Form.Label>
                <Form.Control type="range" name="q3" value={inputFields.q3} onChange={(e) => handleChange(e)} min="0" max="10" step="0.5" />
            </Form.Group>
            <Form.Group controlId="physiologyFormQ4">
                <Form.Label>
                    My ability to garner the resources necessary (time / money / courses / equipment) as of today, which are required to make physical health regiments (for exercise/ cooking etc.) a part of my regular lifestyle in agreement with my personal targets & day to day demands.
                </Form.Label>
                <Form.Control type="range" name="q4" value={inputFields.q4} onChange={(e) => handleChange(e)} min="0" max="10" step="0.5" />
            </Form.Group>
        </Form>
    )
}

export default PhysilogyForm