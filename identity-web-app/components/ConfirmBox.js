import Cookies from 'js-cookie'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function ConfirmBox(props) {

    const deleteItem = () => {
        let request = {}
        request.objectId = props.data._id
        request.object = props.object
        fetch('/application/listen/identity/deleteItem', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            },
            body: JSON.stringify(request)
        })      
    }
    
    return (
        <>    
            <Row>
                <Col>
                    <p className="text-center">
                        Are you sure you want to delete this item ?
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className="text-right">
                    <Button className="btn btn-success m-1" onClick={props.closeModal}>Cancel</Button>
                    <Button className="btn btn-danger m-1" onClick={() => deleteItem()}>Accept</Button>
                </Col>
            </Row>
        </>
    )
}