import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'

import styles from '../styles/Home.module.css'

function SkillCards(props) {
  console.log(props)
  return (
    <>
      <Col xs={12} md={12} lg={4}>
        <Card
          bg="dark"
          text="white"
          className="m-2 p-4 text-center">
          <Card.Header>
            {props.skill.fieldOfInterest}
          </Card.Header>
          <Card.Body>
            <Card.Title className={styles.cardTitleX1}>
              {props.skill.associatedSkill}
            </Card.Title>
            <Card.Text>
              {props.skill.skillDetails.map(((detail) => (
                <Badge pill variant="light" className="m-1">
                  {detail} 
                </Badge>
              )))}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          </Card.Footer>
        </Card>
      </Col>
    </>
  )
}

export default SkillCards
