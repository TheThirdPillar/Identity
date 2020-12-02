import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'

import styles from '../styles/Dashboard.module.css'
import { GrAddCircle } from 'react-icons/gr'

function SectionTitle(props) {
  return (
    <Row className={"justify-content-center " + styles.sectionTitle}>
      <Col xs={12} md={12} lg={12}>
        <h3>{props.title}</h3>
        {
          (props.addButtonEnabled) ? 
            <a onClick={props.handleAdd} className="btn">
              <Badge pill>Add </Badge><GrAddCircle className="mb-1" />
            </a>
            : <></>
        }
      </Col>
    </Row>
  )
}

export default SectionTitle
