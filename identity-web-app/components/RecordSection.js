import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardDeck from 'react-bootstrap/CardDeck'

import styles from '../styles/Dashboard.module.css'
import SectionTitle from './SectionTitle'
import RecordCards from './RecordCards'

function RecordSection(props) {

  const formType = (props.title === "Education") ? "3" : "4"
  
  return (
    <>
      <SectionTitle title={props.title} handleEdit={() => props.handleEdit(formType)} />
      <Row className="justify-content-center">
        <Col xs={12} md={12} lg={12}>
          <CardDeck className={styles.section}>
            <RecordCards />
            <RecordCards />
            <RecordCards />
            <RecordCards />
            <RecordCards />
          </CardDeck>
        </Col>
      </Row>
    </>
  )
}

export default RecordSection
