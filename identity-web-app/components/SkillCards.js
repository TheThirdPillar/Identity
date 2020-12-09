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
          bg={props.skill.data.skillTag == 'tertiary' ? 'dark' : props.skill.data.skillTag}
          text="white"
          className="m-2 p-1 text-center">
          <div className="row">
            <span className="text-left col-6">
             Endorsements: <Badge pill variant="light">{props.skill.data.endorsements.length}</Badge>
            </span>
            <span className="text-right col-6">
             {
               (!props.isPublic) ?  <CardDropdown color="#ffffff" data={props.skill.data} handleEdit={props.handleEdit} /> : <></>
             }
            </span>
          </div>
          <Card.Header className="text-capitalize">
            {props.skill.data.fieldOfInterest}
          </Card.Header>
          <Card.Body>
            <Card.Title className={styles.cardTitleX1 + ' text-capitalize'}>
              {props.skill.data.associatedSkill}
            </Card.Title>
            <Card.Text className="text-capitalize">
              {props.skill.data.skillDetails.map(((detail, index) => (
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
