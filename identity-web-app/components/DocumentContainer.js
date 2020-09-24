import Row from 'react-bootstrap/Col'
import Col from 'react-bootstrap/Col'
import CardDeck from 'react-bootstrap/CardDeck'

import DocumentCards from './DocumentCards'

function DocumentContainer(props) {
  return (
    <>
      <Row>
        <Col>
          <CardDeck>
            <DocumentCards verified={false} />
            <DocumentCards verified={true} />
            <DocumentCards verified={true} />
            <DocumentCards verified={true} />
            <DocumentCards verified={false} />
            <DocumentCards verified={false} />
            <DocumentCards verified={false} />
            <DocumentCards verified={true} />
            <DocumentCards verified={false} />
          </CardDeck>
        </Col>
      </Row>
    </>
  )
}

export default DocumentContainer
