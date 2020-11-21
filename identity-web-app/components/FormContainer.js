import { useState } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import StepContainer from '../components/StepContainer'
import PersonalForm from './PersonalForm'
import EducationForm from './EducationForm'
import ProfessionalForm from './ProfessionalForm'
import SkillForm from './SkillForm'

function FormContainer() {

  const [currentStep, nextStep] = useState(4)

  var leftColImage = ''
  let rightColForm

  if (currentStep == 1) {
    leftColImage = '/undraw_personalization_triu.svg'
    rightColForm = <PersonalForm fullForm={false} updateState={() => {nextStep(currentStep + 1)}} />
  } else if (currentStep == 2) {
    leftColImage = '/undraw_certificate_343v.svg'
    rightColForm = <EducationForm updateState={() => {nextStep(currentStep + 1)}} />
  } else if (currentStep == 3) {
    leftColImage = '/undraw_remotely_2j6y.svg'
    rightColForm = <ProfessionalForm updateState={() => {nextStep(currentStep + 1)}} />
  } else if (currentStep == 4) {
    leftColImage = '/undraw_percentages_0rur.svg'
    rightColForm = <SkillForm />
  }

  return (
    <>
      <StepContainer currentStep={currentStep} />
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
