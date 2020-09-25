import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import PersonalForm from './PersonalForm'

function FormContainer(props) {

  var leftColImage = ''
  let rightColForm
  if (props.currentStep == 0) {
    leftColImage = '/undraw_personalization_triu.svg'
    rightColForm = <PersonalForm />
  } else if (props.currentStep == 1) {
    leftColImage = '/undraw_certificate_343v.svg'
  } else if (props.currentStep == 2) {
    leftColImage = '/undraw_remotely_2j6y.svg'
  } else if (props.currentStep == 3) {
    leftColImage = '/undraw_percentages_0rur.svg'
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
