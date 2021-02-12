import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { FcDataEncryption } from 'react-icons/fc'

import styles from '../styles/Dashboard.module.css'

function DocumentCards(props) {
  return (
    <>
      <Col xs={12} md={6} lg={4}>
        <Card
          bg="dark"
          text="white"
          className="mt-4 mb-4 p-1 text-center">
          <Card.Header>
            <FcDataEncryption />
          </Card.Header>
          <Card.Body>
            <Card.Title className="text-capitalize">
              Document Title
            </Card.Title>
            <Button variant="primary">View Document</Button>
          </Card.Body>
          <Card.Footer>
            Shared <Badge variant="success">5</Badge>
          </Card.Footer>
        </Card>
      </Col>
    </>
  )
}

export default DocumentCards
