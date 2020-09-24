import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function FormContainer(props) {
  return (
    <>
      <Row>
        <Col xs={12} md={12} lg={6} className="p-4 m-4 d-none d-lg-block">
          <Image
            src='/undraw_personalization_triu.svg' fluid />
          }
        </Col>
      </Row>
    </>
  )
}

export default FormContainer
