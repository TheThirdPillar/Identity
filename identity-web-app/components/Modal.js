import Modal from 'react-bootstrap/Modal'

import PersonalForm from './PersonalForm'
import SkillForm from './SkillForm'
import EducationForm from './EducationForm'
import ProfessionalForm from './ProfessionalForm'
import DocumentList from './DocumentList'
import ConfirmBox from './ConfirmBox'

function CustomModal(props) {

    let modalBody

    switch(props.form) {
        case "1":
            modalBody = <PersonalForm formData={props.formData} fullForm={true} closeModal={props.onHide} />
            break
        case "2":
            modalBody = <SkillForm formData={props.formData.data} closeModal={props.onHide} />
            break
        case "3":
            modalBody = <EducationForm formData={props.formData.recordData} closeModal={props.onHide} />
            break
        case "4":
            modalBody = <ProfessionalForm formData={props.formData.recordData} closeModal={props.onHide} />
            break
        case "5":
            modalBody = <DocumentList recordData={props.formData} documents={props.formData.documents} closeModal={props.onHide} isPublic={props.isPublic} />
            break
        case "6":
            modalBody = <ConfirmBox object={props.object} closeModal={props.onHide} isPublic={false} data={props.formData} />  
            break        
        default:
            modalBody = ''
            break
    }

    return (
        <Modal 
            show={props.show}
            onHide={props.onHide}
            backdrop="static"
            keyboard={false}
            aria-labelledby="modal-title-vcenter"
            size="lg"
            enforceFocus={false}
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