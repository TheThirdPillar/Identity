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
      <SectionTitle title={props.title} addButtonEnabled={true} handleAdd={() => props.handleModalShow({type: formType, data: {}})} />
      <Row className="justify-content-center">
        <Col xs={12} md={12} lg={12}>
          <CardDeck className={styles.section}>
            {
              props.records.map(((record, index) => (
                <RecordCards key={index} record={record} handleEdit={() => props.handleModalShow({type: formType, data: record})} />
              )))
            }
          </CardDeck>
        </Col>
      </Row>
    </>
  )
}

export default RecordSection