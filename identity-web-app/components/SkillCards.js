import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'

import styles from '../styles/Home.module.css'

function SkillCards() {
  return (
    <>
      <Col xs={12} md={12} lg={4}>
        <Card
          bg="primary"
          text="white"
          className="m-2 p-4 text-center">
          <Card.Text>
            Computer Science
          </Card.Text>
          <Card.Title className={styles.cardTitleX2}>
            Javascript
          </Card.Title>
          <Card.Text>
          <Badge pill variant="light">
            Node
          </Badge>{' '}
          <Badge pill variant="light">
            React
          </Badge>{' '}
          <Badge pill variant="light">
            Angular
          </Badge>{' '}
          </Card.Text>
        </Card>
      </Col>
    </>
  )
}

export default SkillCards
