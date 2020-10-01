import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'

import styles from '../styles/Home.module.css'
import CardDropdown from './CardDropdown'

function SkillCards(props) {
  const skill = props.skill
  return (
    <>
      <Col xs={12} md={12} lg={4}>
        <Card
          bg={props.skill.skillTag == 'tertiary' ? 'dark' : props.skill.skillTag}
          text="white"
          className="m-2 p-1 text-center">
          <span className="text-right">
            <CardDropdown data={skill} handleEdit={props.handleEdit} />
          </span>
          <Card.Header>
            {props.skill.fieldOfInterest}
          </Card.Header>
          <Card.Body>
            <Card.Title className={styles.cardTitleX1}>
              {props.skill.associatedSkill}
            </Card.Title>
            <Card.Text>
              {props.skill.skillDetails.map(((detail, index) => (
                <Badge pill variant="light" className="m-1" key={index} >
                  {detail}
                </Badge>
              )))}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default SkillCards
