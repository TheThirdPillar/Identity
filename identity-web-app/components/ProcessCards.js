import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import styles from '../styles/Home.module.css'

function ProcessCards(props) {
  return (
    <>
      <Col xs={12} md={12} lg={4}>
        <Card
          bg="dark"
          text="white"
          className="m-2 p-4 text-center">
          <Card.Title className={styles.cardTitleX2}>
            {props.title}
          </Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
        </Card>
      </Col>
    </>
  )
}

export default ProcessCards
