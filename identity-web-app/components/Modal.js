import Modal from 'react-bootstrap/Modal'

import PersonalForm from './PersonalForm'
import SkillForm from './SkillForm'
import EducationForm from './EducationForm'
import ProfessionalForm from './ProfessionalForm'

function CustomModal(props) {

    let modalBody

    switch(props.form) {
        case "1":
            modalBody = <PersonalForm formData={props.formData} fullForm={true} />
            break
        case "2":
            modalBody = <SkillForm formData={props.formData} />
            break
        case "3":
            modalBody = <EducationForm formData={props.formData} />
            break
        case "4":
            modalBody = <ProfessionalForm formData={props.formData} />
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