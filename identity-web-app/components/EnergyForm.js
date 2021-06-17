import { useState } from 'react'
import Cookies from 'js-cookie'

import Form from 'react-bootstrap/Form'

function EnergyForm () {

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
            <Form.Group controlId="energyFormQ1">
                <Form.Label>
                    My ability on most days to support others, do selfless acts of generosity, put others before myself, be honest & honorable in my actions & words, to display strength & integrity with my choices & be kind to myself about my limitations while managing personal insecurities.
                </Form.Label>
                <Form.Control type="range" name="q1" value={inputFields.q1} onChange={(e) => handleChange(e)} min="0" max="10" step="0.5" />
            </Form.Group>
            <Form.Group controlId="energyFormQ2">
                <Form.Label>
                    My ability to engage in extended periods of self reflection, emotionally draining conversations, situations that are out of my comfort zone & complex or nuanced decision making while standing firm & calm in the face of major uncertainties about people & my future.    
                </Form.Label>
                <Form.Control type="range" name="q2" value={inputFields.q2} onChange={(e) => handleChange(e)} min="0" max="10" step="0.5" />
            </Form.Group>
            <Form.Group controlId="energyFormQ3">
                <Form.Label>
                    My ability to face my faults & weaknesses, accept my mistakes even when it's hard to, avoid suppressing or avoiding troubling thoughts, emotions or ideas, to acknowledge & understand my place in various social hierarchies & what it takes to climb up to the top.
                </Form.Label>
                <Form.Control type="range" name="q3" value={inputFields.q3} onChange={(e) => handleChange(e)} min="0" max="10" step="0.5" />
            </Form.Group>
            <Form.Group controlId="energyFormQ4">
                <Form.Label>
                    My ability to clear my mind, when needed, of lingering thoughts or nervousness which may interfere with healthy functioning (like work or sleep), to manage stress & toxicity, to identify, accept & be aware of my identity & personality as it relates to the key areas of focus in my life.  
                </Form.Label>
                <Form.Control type="range" name="q4" value={inputFields.q4} onChange={(e) => handleChange(e)} min="0" max="10" step="0.5" />
            </Form.Group>
        </Form>
    )
}

export default EnergyForm