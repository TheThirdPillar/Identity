import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import CardDropdown from './CardDropdown'

function RecordCards(props) {
  return (
    <>
      <Col xs={12} md={6} lg={4}>
        <Card
          bg="secondary"
          text="white"
          className="mt-4 mb-4 p-1 text-center">
          <p className="text-right">
            <CardDropdown handleEdit={() => props.handleEdit()} />
          </p>
          <Card.Body>
            <Card.Title>
              PES Institute of Technology
            </Card.Title>
            <Card.Text>
              B.Tech, Information Science
            </Card.Text>
            <Card.Text>
              2009 - Present
            </Card.Text>
            <Button variant="dark">Manage Documents</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default RecordCards
