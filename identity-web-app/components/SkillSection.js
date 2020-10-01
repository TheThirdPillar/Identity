import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardDeck from 'react-bootstrap/CardDeck'

import styles from '../styles/Dashboard.module.css'
import SectionTitle from './SectionTitle'
import SkillCards from './SkillCards'

function SkillSection(props) {
  return (
    <>
      <SectionTitle title={props.title} addButtonEnabled={true} handleAdd={() => props.handleModalShow({type: "2", data: {}})} />
      <Row className="justify-content-center">
        <Col xs={12} md={12} lg={12}>
          <CardDeck className={styles.section}>
            {props.skills.map(((skill) => (
              <SkillCards skill={skill} handleEdit={(skill) => props.handleModalShow({type: "2", data: skill})} />
            )))}
          </CardDeck>
        </Col>
      </Row>
    </>
  )
}

export default SkillSection
