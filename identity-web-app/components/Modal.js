import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import PersonalForm from './PersonalForm'
import SkillForm from './SkillForm'
import EducationForm from './EducationForm'
import ProfessionalForm from './ProfessionalForm'

function CustomModal(props) {

    let modalBody

    switch(props.form) {
        case "1":
            modalBody = <PersonalForm />
            break
        case "2":
            modalBody = <SkillForm />
            break
        case "3":
            modalBody = <EducationForm />
            break
        case "4":
            modalBody = <ProfessionalForm />
            break
        default:
            modalBody = ''
    }

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
                {modalBody}
            </Modal.Body>
        </Modal>
    )
}

export default CustomModal