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
      <SectionTitle title={props.title} addButtonEnabled={!props.isPublic} handleAdd={() => props.handleModalShow({type: formType, data: {}})} />
      <Row className="justify-content-center">
        <Col xs={12} md={12} lg={12}>
          <CardDeck className={styles.section}>
            {
              props.records.map(((record, index) => (
                <RecordCards key={index} isPublic={props.isPublic} record={record} handleEdit={() => props.handleModalShow({type: formType, data: record})} handleDocuments={() => props.handleModalShow({type: "5", data: record})} handleDelete={() => props.handleModalShow({type: "6", data: record, object: 'record' })} />
              )))
            }
          </CardDeck>
        </Col>
      </Row>
    </>
  )
}

export default RecordSection
