import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function CustomModal(props) {
    return (
        <Modal 
            show={props.show}
            onHide={props.onHide}
            backdrop="static"
            keyboard={false}
            aria-labelledby="modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.form}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={props.onHide}>Close</Button>
                <Button variant='success' onClick={props.onHide}>Save</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CustomModal