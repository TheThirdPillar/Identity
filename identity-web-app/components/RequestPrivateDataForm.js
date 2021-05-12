import { useState } from 'react'
import Cookies from 'js-cookie'

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { domain } from '../config/config'

function RequestPrivateDataForm(props) {

    const [inputFields, setInputFields] = useState({
        email: '',
        profileURL: '',
        ...props.userData
    })

    const handleChange = (e) => {
        let currentField = {...inputFields}
        currentField[e.target.name] = e.target.value
        setInputFields(currentField)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(domain + '/user/requestPrivateDataByEmail', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            },
            body: JSON.stringify(inputFields)
        })
        .then(response => response.json())
        .then(data => {
            if (data.status && data.status == "SUCCESS") {
                // Update parent
                toggleLogState(true)
                setLogText("You have successfully requested user for private data over email.")
                setTimeout(() => {
                    props.closeModal()
                }, 3000)
            } else {
                toggleLogState(false)
                setLogText('Unable to request profile at the moment.')
            }
        })
    }

    const [logState, toggleLogState] = useState(false)
    const [logText, setLogText] = useState('')

    return (
        <>
            <Form onSubmit={(e) => handleSubmit(e)} autoComplete="off" lg={10} xs={10} md={10} className="m-2 p-1">
                <Form.Group as={Row} controlId="email">
                    <Form.Control type="email" placeholder="Share your email address" value={inputFields.email} name="email" onChange={(e) => handleChange(e)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>
                </Form.Group>
                <Form.Group as={Row} controlId="powURL">
                    <Form.Control type="url" placeholder="Input your twitter or linkedin URL" name="profileURL" value={inputFields.profileURL} onChange={(e) => handleChange(e)} required />
                </Form.Group>
                <Form.Group as={Row}>
                    <Col className="text-right">
                        <Button type="submit" disabled={inputFields.email == '' || inputFields.profileURL == ''}>Submit</Button>
                    </Col>
                </Form.Group>
            </Form>
            <Row>
                <Col className={ (logState) ? "text-success" : "text-danger" }>
                    {logText}
                </Col>
            </Row>
        </>
    )
}

export default RequestPrivateDataForm