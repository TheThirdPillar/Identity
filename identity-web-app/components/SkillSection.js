import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardDeck from 'react-bootstrap/CardDeck'

import styles from '../styles/Dashboard.module.css'
import SectionTitle from './SectionTitle'
import SkillCards from './SkillCards'

function SkillSection(props) {
  return (
    <>
      <SectionTitle title={props.title} handleEdit={() => props.handleEdit("2")} />
      <Row className="justify-content-center">
        <Col xs={12} md={12} lg={12}>
          <CardDeck className={styles.section}>
            {props.skills.map(((skill) => (
              <SkillCards skill={skill} />
            )))}
          </CardDeck>
        </Col>
      </Row>
    </>
  )
}

export default SkillSection
