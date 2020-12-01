import Row from 'react-bootstrap/Col'
import Col from 'react-bootstrap/Col'

function DocumentContainer(props) {
  return (
    <>
      <Row>
        <Col>
          {props.children}
        </Col>
      </Row>
    </>
  )
}

export default DocumentContainer
