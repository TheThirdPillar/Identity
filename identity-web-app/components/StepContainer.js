import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ProgressBar from 'react-bootstrap/ProgressBar'

function StepContainer(props) {
  const currentStep = props.currentStep
  const totalStep = 4
  return (
    <>
      <Row className="mt-lg-2">
        <Col xs={12} lg={3}>
          <Card
          bg={(currentStep >= 1) ? "primary" : "secondary"}
          text="white"
          className="m-2 p-4 text-center"
          >
            <Card.Body>
              <Card.Title>Personal</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={3}>
          <Card
          bg={(currentStep >= 2) ? "primary" : "secondary"}
          text="white"
          className="m-2 p-4 text-center"
          >
            <Card.Body>
              <Card.Title>Education</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={3}>
          <Card
          bg={(currentStep >= 3) ? "primary" : "secondary"}
          text="white"
          className="m-2 p-4 text-center"
          >
            <Card.Body>
              <Card.Title>Work</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={3}>
          <Card
          bg={(currentStep >= 4) ? "primary" : "secondary"}
          text="white"
          className="m-2 p-4 text-center"
          >
            <Card.Body>
              <Card.Title>Skill</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-lg-2">
        <Col>
          <ProgressBar animated now={(currentStep/totalStep) * 100} />
        </Col>
      </Row>
    </>
  )
}

export default StepContainer
