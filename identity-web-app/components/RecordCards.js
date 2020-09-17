import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import styles from '../styles/Dashboard.module.css'

function RecordCards(props) {
  return (
    <>
      <Col xs={12} md={6} lg={4}>
        <Card
          bg="light"
          text="black"
          className="mt-4 mb-4 p-1 text-center">
          <Card.Body>
            <Card.Img variant="top" src="/Organization.png" className={styles.recordCardImage}/>
            <br />
            <br />
            <Card.Title>
              PES Institute of Technology
            </Card.Title>
            <Card.Text>
              B.Tech, Information Science
            </Card.Text>
            <Card.Text>
              2009 - Present
            </Card.Text>
            <Button variant="primary">Manage Documents</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default RecordCards
