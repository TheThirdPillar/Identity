import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import PersonalForm from './PersonalForm'
import OtpForm from './OtpForm'
import EducationForm from './EducationForm'
import ProfessionalForm from './ProfessionalForm'
import SkillForm from './SkillForm'

function FormContainer(props) {

  var leftColImage = ''
  let rightColForm
  if (props.currentStep == 1) {
    leftColImage = '/undraw_personalization_triu.svg'
    rightColForm = <PersonalForm fullForm={false}/>
  } else if (props.currentStep == 2) {
    leftColImage = '/undraw_certificate_343v.svg'
    rightColForm = <EducationForm />
  } else if (props.currentStep == 3) {
    leftColImage = '/undraw_remotely_2j6y.svg'
    rightColForm = <ProfessionalForm />
  } else if (props.currentStep == 4) {
    leftColImage = '/undraw_percentages_0rur.svg'
    rightColForm = <SkillForm />
  }

  return (
    <>
      <Row className="mt-lg-4 justify-content-center">
        <Col lg={5} className="p-1 m-1">
          <Image
            src={leftColImage} />
        </Col>
        <Col lg={6} className="p-1 m-1 ml-lg-4">
            {rightColForm}
        </Col>
      </Row>
    </>
  )
}

export default FormContainer
