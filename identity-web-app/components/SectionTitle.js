import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from '../styles/Dashboard.module.css'
import { GrEdit } from 'react-icons/gr'

function SectionTitle(props) {
  return (
    <Row className={"justify-content-center " + styles.sectionTitle}>
      <Col xs={12} md={12} lg={10}>
        <h3>{props.title}</h3>
        <a>
          Edit <GrEdit />
        </a>
      </Col>
    </Row>
  )
}

export default SectionTitle
