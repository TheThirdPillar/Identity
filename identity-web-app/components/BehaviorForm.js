import { useState } from 'react'
import Cookies from 'js-cookie'

import Form from 'react-bootstrap/Form'

function BehaviorForm () {

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
            <Form.Group controlId="behaviorFormQ1">
                <Form.Label>
                    My ability to articulate feelings, ideas or thoughts in a lucid & streamlined way, to refine & evolve my them through writing & editing, to summarize or paraphrase them suitably, to leverage personal or other stories for more efficient communication & deeper connection or impact.
                </Form.Label>
                <Form.Control type="range" name="q1" value={inputFields.q1} onChange={(e) => handleChange(e)} min="0" max="10" step="0.5" />
            </Form.Group>
            <Form.Group controlId="behaviorFormQ2">
                <Form.Label>
                    My ability to understand what being productive looks like vs what's a farce, to appreciate how willpower works like a muscle & needs to be invested into habits, systems & accountability, to identity what harms my execution & priority of fixing them, to extract peak performance when needed.
                </Form.Label>
                <Form.Control type="range" name="q2" value={inputFields.q2} onChange={(e) => handleChange(e)} min="0" max="10" step="0.5" />
            </Form.Group>
            <Form.Group controlId="behaviorFormQ3">
                <Form.Label>
                    My ability to think of more number of solutions to a problem which are more unusual, more unrelated & more detailed, to apply the 6 Thinking Hats of facts, emotion, benefit, ideas, planning & judgement to create high quality art, designs or products in some category that solves some problem.
                </Form.Label>
                <Form.Control type="range" name="q3" value={inputFields.q3} onChange={(e) => handleChange(e)} min="0" max="10" step="0.5" />
            </Form.Group>
            <Form.Group controlId="behaviorFormQ4">
                <Form.Label>
                    My ability to be clear, concise & crisp in my words, to adjust my voice (pitch, volume, prosody, register, etc) to communicate with more impact, to negotiate tricky & awkward conversations successfully & to steer arguments or fights into a productive direction without avoiding them.
                </Form.Label>
                <Form.Control type="range" name="q4" value={inputFields.q4} onChange={(e) => handleChange(e)} min="0" max="10" step="0.5" />
            </Form.Group>
        </Form>
    )
}

export default BehaviorForm